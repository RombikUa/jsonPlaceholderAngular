
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  status: 'active' | 'deactivated' | undefined;
}
