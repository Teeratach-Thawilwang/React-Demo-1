import { User } from "@models/user";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string;
}
