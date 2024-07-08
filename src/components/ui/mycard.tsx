/**
 * v0 by Vercel.
 * @see https://v0.dev/t/94v88bGLF1J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Mycard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
    </Card>
  )
}