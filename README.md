# MCP TypeScript Simple Template

A simple TypeScript template for building Model Context Protocol (MCP) servers. This project provides a foundation for creating custom MCP tools that can be integrated with AI systems.

## Overview

This template implements a basic MCP server with a sample BMI calculator tool. It demonstrates how to:

- Set up an MCP server in TypeScript
- Define and implement MCP tools with input validation using Zod
- Connect the server to standard I/O for communication

## Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## Project Structure

- `index.ts` - Main server implementation with sample tool
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## Usage

### Building and Running

Build and start the server:

```bash
npm start
```

This will compile the TypeScript code and start the MCP server.

### Development

For development, you can:

1. Modify `index.ts` to add your own tools
2. Run the build command to compile:

```bash
npm run build
```

## Creating Custom Tools

To create a new tool, follow this pattern in `index.ts`:

```typescript
server.tool(
  "your-tool-name",
  {
    // Define input schema using Zod
    paramName: z.string(),
    // Add more parameters as needed
  },
  async ({ paramName }) => ({
    content: [{
      type: "text",
      text: "Your tool's response"
    }]
  })
);
```

## Dependencies

- `@modelcontextprotocol/sdk` - Core MCP SDK
- `zod` - Schema validation
- `dotenv` - Environment variable management
- `typescript` - TypeScript compiler

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
