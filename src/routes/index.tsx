import { useRoutes } from "react-router-dom";
import { ToolLayout } from "../components/App/ToolLayout";
import { useTools } from "../hooks/useTools";

export const AppRoutes = () => {
  const { tools } = useTools();

  const toolRoutes = tools.map((tool) => {
    const path = {
      path: tool.path,
      element: <ToolLayout tool={tool} />,
    };
    return path;
  });

  const routes = [
    { path: "*", element: <div>Not Found!</div> },
    { path: "/", element: <div>Home!</div> },
  ];

  const element = useRoutes([...routes, ...toolRoutes]);

  return <>{element}</>;
};
