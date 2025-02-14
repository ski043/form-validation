import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "./actions";

export default function Home() {
  return (
    <div className="w-full flex min-h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Form Validation (Server Side and Client Side)</CardTitle>
          <CardDescription>
            This is a form validation example using Next.js 15, Zod, Shadcn/UI,
            React-Hook-Form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={createJob}>
            <div>
              <Label>Title</Label>
              <Input required placeholder="Enter your Title" name="title" />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea
                placeholder="Enter your description"
                name="description"
                required
              />
            </div>
            <div>
              <Label>Status</Label>
              <Select required name="status">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
