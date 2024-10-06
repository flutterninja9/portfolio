import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTools } from "@/lib/firebase";

export default async function ToolsSection() {
  const tools = await getTools();

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
           <Card
           key={tool.id}
           className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-none transition-transform transform hover:scale-105"
         >
           <span className="text-3xl font-bold mb-2" style={{color: tool.color}}>
             {tool.name.charAt(0)}
           </span>
           <span className="text-md font-medium text-center">
             {tool.name}
           </span>
         </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
