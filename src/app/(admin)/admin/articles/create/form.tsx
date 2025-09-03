import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { categoryMap } from "@/constants/articles";
import ContentInput from "../contentInput";
import { useAuthors } from "@/hooks/articles";
import { Button } from "../button";
import { DropdownInput, TextArea, TextInput } from "../inputs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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
  const { data: authors = [], isLoading, isError, error } = useAuthors();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
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

  const { mutate: createArticle, isPending } = useMutation({
    mutationFn: async (article: any) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/articles`,
        article
      );
      return response.data;
    },
    onSuccess: () => {
      router.push("/admin/articles");
    },
    onError: (error) => {
      console.error("Error creating article: ", error);
    },
  });

  const onSubmit = (data: ArticleFormData) => {
    const updatedContent = data.content.replace(/<p><\/p>/g, "<br>");
    const slug = data.title.toLowerCase().replace(/ /g, "-");
    const article = {
      ...data,
      content: updatedContent,
      slug,
      published: true,
      tags: [],
    };
    createArticle(article);
  };

  return (
    <div className="mt-10 md:w-3xl w-full p-5">
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

        {isLoading ? (
          <div className="mb-4 sm:mb-8 text-neutral-400">
            Loading authors...
          </div>
        ) : isError ? (
          <div className="mb-4 sm:mb-8 text-red-500">
            {error?.message || "Failed to load authors."}
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
          <Button type="submit" isPending={isPending}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
