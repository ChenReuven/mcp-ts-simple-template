
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";


const server = new McpServer({
    name: "My App",
    version: "1.0.0"
  });

// make a echo server tool
server.tool(
    "echo",
    {
      text: z.string()
    },
    async ({ text }) => ({
      content: [{
        type: "text",
        text
      }]
    })
  );

server.tool(
    "calculate-bmi",
    {
      weightKg: z.number(),
      heightM: z.number()
    },
    async ({ weightKg, heightM }) => ({
      content: [{
        type: "text",
        text: String(weightKg / (heightM * heightM))
      }]
    })
  );

  // Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);

console.log("Server started...");
