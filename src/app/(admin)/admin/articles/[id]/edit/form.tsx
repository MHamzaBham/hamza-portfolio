import { useRouter, useParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { categoryMap } from "@/constants/articles";
import ContentInput from "../../contentInput";
import {
  useAuthors,
  useArticle,
  useUpdateArticle,
  useDeleteArticle,
} from "@/hooks/articles";
import { Button, DeleteButton } from "../../button";
import { DropdownInput, TextArea, TextInput } from "../../inputs";
import { useEffect } from "react";

// Zod validation schema
const articleSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  excerpt: z
    .string()
    .min(1, "Excerpt is required")
    .max(500, "Excerpt must be less than 500 characters"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(1, "Author is required"),
  content: z.string().min(1, "Content is required"),
  featured_image: z
    .string()
    .min(1, "Featured image is required")
    .url("Must be a valid URL"),
  featured_video: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
});

type ArticleFormData = z.infer<typeof articleSchema>;

function Form() {
  const router = useRouter();
  const params = useParams();
  const articleId = params?.id as string;

  const {
    data: article,
    isLoading: isArticleLoading,
    isError: isArticleError,
    error: articleError,
  } = useArticle(articleId);

  const {
    data: authors = [],
    isLoading: isAuthorsLoading,
    isError: isAuthorsError,
    error: authorsError,
  } = useAuthors();

  const updateArticleMutation = useUpdateArticle(articleId);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      excerpt: "",
      category: "",
      author: "",
      content: "",
      featured_image: "",
      featured_video: "",
    },
  });

  // Reset form when article data loads
  useEffect(() => {
    if (article) {
      reset({
        title: article.title || "",
        excerpt: article.excerpt || "",
        category: article.category || "",
        author: article.author || "",
        content: article.content || "",
        featured_image: article.featured_image || "",
        featured_video: article.featured_video || "",
      });
    }
  }, [article, reset]);

  const onSubmit = (data: ArticleFormData) => {
    const updatedContent = data.content.replace(/<p><\/p>/g, "<br>");
    const slug = data.title.toLowerCase().replace(/ /g, "-");
    const updatedArticle = {
      ...data,
      content: updatedContent,
      slug,
      published: true,
      tags: [],
      _id: articleId,
    };

    updateArticleMutation.mutate(updatedArticle as any, {
      onSuccess: () => {
        router.push("/admin/articles");
      },
    });
  };

  if (isArticleLoading) {
    return <div className="mt-10 text-neutral-400">Loading article...</div>;
  }

  if (isArticleError) {
    return (
      <div className="mt-10 text-red-500">
        {articleError?.message || "Failed to load article."}
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextInput
          label="Title"
          type="text"
          placeholder="Title"
          id="title"
          register={register("title")}
          error={errors.title}
        />

        <TextArea
          label="Excerpt"
          placeholder="Excerpt"
          id="excerpt"
          register={register("excerpt")}
          error={errors.excerpt}
        />

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <DropdownInput
              placeholder="Select a category"
              label="Category"
              id="category"
              options={Object.values(categoryMap).map((category) => ({
                _id: category.id,
                name: category.name,
              }))}
              value={field.value}
              onChange={field.onChange}
              error={errors.category}
            />
          )}
        />

        {isAuthorsLoading ? (
          <div className="mb-4 sm:mb-8 text-neutral-400">
            Loading authors...
          </div>
        ) : isAuthorsError ? (
          <div className="mb-4 sm:mb-8 text-red-500">
            {authorsError?.message || "Failed to load authors."}
          </div>
        ) : (
          <Controller
            name="author"
            control={control}
            render={({ field }) => (
              <DropdownInput
                placeholder="Select an author"
                label="Author"
                id="author"
                options={authors.map((author) => ({
                  _id: author._id,
                  name: author.name,
                }))}
                value={field.value}
                onChange={field.onChange}
                error={errors.author}
              />
            )}
          />
        )}

        <div className="mb-4 sm:mb-8">
          <label className="block mb-2 text-sm font-medium text-white">
            Content
          </label>
          <ContentInput
            content={watch("content")}
            setContent={(content: string) => setValue("content", content)}
          />
          {errors.content && (
            <p className="mt-2 text-sm text-red-400">
              {errors.content.message}
            </p>
          )}
        </div>

        <TextInput
          label="Featured Image"
          type="url"
          placeholder="https://example.com/image.jpg"
          id="featured_image"
          register={register("featured_image")}
          error={errors.featured_image}
        />

        <TextInput
          label="Featured Video (Optional)"
          type="url"
          placeholder="https://example.com/video.mp4"
          id="featured_video"
          register={register("featured_video")}
          error={errors.featured_video}
        />

        <div className="mt-6 grid">
          <Button type="submit" isPending={updateArticleMutation.isPending}>
            Save Changes
          </Button>
        </div>
      </form>
      <DeleteArticle articleId={articleId} />
    </div>
  );
}

export default Form;

const DeleteArticle = ({ articleId }: { articleId: string }) => {
  const { mutate: deleteArticle, isPending } = useDeleteArticle();
  const router = useRouter();
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this article?")) {
      deleteArticle(articleId);
      router.push("/admin/articles");
    }
  };

  return (
    <div className="my-4">
      <DeleteButton onClick={handleDelete} isPending={isPending} />
    </div>
  );
};
