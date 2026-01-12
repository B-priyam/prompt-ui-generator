"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import {} from "@/lib/ai-tools/groq";
import { themeToCssVars } from "@/lib/helper";
import { THEMES } from "@/lib/constants/themes";
import { useState } from "react";
import Canvas from "@/components/Canvas";
import Sidebar from "@/components/Sidebar";
import { generateConfig, generateScreen } from "@/lib/ai-tools/openrouter";
// import { generateConfig } from "@/lib/ai-tools/gemeni";

const page = () => {
  const { projectId } = useParams();
  const [code, setCode] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("DUSTY_ORCHID");
  const getResponseFromAi = async () => {
    setCode([]);
    const inputData = {
      deviceType: "website",
      description:
        "Generate a modern and professional full stack developer portfolio website",
    };
    const data = (await generateConfig(inputData)) as any;
    const parsedData = JSON.parse(data);

    if (parsedData.projectName) {
      setName(parsedData.projectName);
    }
    if (parsedData.screens.length > 0) {
      parsedData.screens.map(async (screen: any, index: number) => {
        const screenCode = (await generateScreen(
          parsedData.screens[index]
        )) as string;
        setCode((prev) => [...prev, screenCode]);
        console.log(`SCREEN ${index} Data`);
      });
    }
  };
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className="tools">
        <button onClick={() => zoomIn()}>+</button>
        <button onClick={() => zoomOut()}>-</button>
        <button onClick={() => resetTransform()}>x</button>
      </div>
    );
  };
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Sidebar
        setTheme={setTheme}
        theme={theme}
        name={name}
        setName={setName}
      />
      <Canvas code={code} theme={theme} />

      <Button onClick={getResponseFromAi}>Generate</Button>
    </div>
  );
};

export default page;
