export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-lg";
  label: string;
  onClick: () => void;
}

export interface PostProps {
  id: number;
  title: string;
  body: string; // 'content' in instructions is usually 'body' from API
  userId: number;
}
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
