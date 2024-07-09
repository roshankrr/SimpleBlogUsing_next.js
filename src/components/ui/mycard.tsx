import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Mycard(data:{_id:string,title:string,discription:string}) {
  return (
    <Card className=" max-w-md flex flex-col flex-wrap">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.discription}</CardDescription>
      </CardHeader>
    </Card>
  )
}