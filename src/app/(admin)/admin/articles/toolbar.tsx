"use client";

import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading as HeadingIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  GalleryVerticalEnd,
  Image as ImageIcon,
} from "lucide-react";
import { TextAlign } from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import { useCallback } from "react";

const Toolbar = ({ editor }: { editor: Editor }) => {
  if (!editor) return null;

  // Helper for heading active state
  const isHeadingActive = useCallback(
    (level: number) => editor.isActive("heading", { level }),
    [editor]
  );

  return (
    <div className="flex flex-wrap items-center p-2 bg-neutral-900 rounded-t-md border-b border-neutral-700 shadow-sm">
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        label="Undo"
      >
        <Undo className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        label="Redo"
      >
        <Redo className="w-4 h-4" />
      </ToolbarButton>
      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
        label="Bold"
      >
        <Bold className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive("italic")}
        label="Italic"
      >
        <Italic className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        active={editor.isActive("underline")}
        label="Underline"
      >
        <Underline className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        active={editor.isActive("strike")}
        label="Strikethrough"
      >
        <Strikethrough className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive("code")}
        label="Inline Code"
      >
        <Code className="w-4 h-4" />
      </ToolbarButton>
      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active={isHeadingActive(1)}
        label="Heading 1"
      >
        <HeadingIcon className="w-4 h-4" />
        <span className="ml-1 text-xs font-bold">1</span>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={isHeadingActive(2)}
        label="Heading 2"
      >
        <HeadingIcon className="w-4 h-4" />
        <span className="ml-1 text-xs font-bold">2</span>
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={isHeadingActive(3)}
        label="Heading 3"
      >
        <HeadingIcon className="w-4 h-4" />
        <span className="ml-1 text-xs font-bold">3</span>
      </ToolbarButton>
      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        label="Bullet List"
      >
        <List className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        label="Numbered List"
      >
        <ListOrdered className="w-4 h-4" />
      </ToolbarButton>
      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
        label="Blockquote"
      >
        <Quote className="w-4 h-4" />
      </ToolbarButton>
      <Divider />

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        active={editor.isActive({ textAlign: "left" })}
        label="Align Left"
      >
        <AlignLeft className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        active={editor.isActive({ textAlign: "center" })}
        label="Align Center"
      >
        <AlignCenter className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        active={editor.isActive({ textAlign: "right" })}
        label="Align Right"
      >
        <AlignRight className="w-4 h-4" />
      </ToolbarButton>
      <Divider />

      <ToolbarButton
        onClick={() => {
          const url = window.prompt("Enter URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        active={editor.isActive("link")}
        label="Insert Link"
      >
        <Link className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          const url = window.prompt("Enter image URL");
          if (url && url.trim())
            editor
              .chain()
              .focus()
              .insertContent({ type: "image", attrs: { src: url } })
              .run();
        }}
        label="Insert Image"
      >
        <ImageIcon className="w-4 h-4" />
      </ToolbarButton>
    </div>
  );
};

export default Toolbar;

type ToolbarButtonProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  label: string;
};

function ToolbarButton({
  onClick,
  active,
  disabled,
  children,
  label,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`p-2 rounded transition-colors flex items-center justify-center
          ${
            active
              ? "bg-blue-600 text-white"
              : "hover:bg-neutral-800 text-neutral-300"
          }
          disabled:opacity-40 disabled:cursor-not-allowed`}
      tabIndex={0}
    >
      {children}
    </button>
  );
}

const Divider = () => (
  <div className="w-px h-6 bg-neutral-700 mx-1" aria-hidden="true" />
);
