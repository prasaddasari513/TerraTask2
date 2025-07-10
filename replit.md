# AWS EC2 Ubuntu Terraform Tutorial

## Overview

This is a full-stack web application built to create an educational tutorial about deploying secure Ubuntu EC2 instances in AWS using Terraform. The application provides a comprehensive guide with code examples, step-by-step instructions, and visual content to help users learn Infrastructure as Code principles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling
- **Server Architecture**: RESTful API with middleware-based request handling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (via @neondatabase/serverless)
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Header**: Navigation component with section-based routing
- **Content Sections**: Modular sections for Overview, Definitions, Terraform Code, Instructions, and Screenshots
- **Code Blocks**: Syntax-highlighted code display with copy functionality
- **Lightbox**: Image viewer for screenshots and diagrams
- **UI Components**: Complete shadcn/ui component library implementation

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Vite Integration**: Development server with HMR support
- **Error Handling**: Global error middleware

### Shared Components
- **Schema**: User model with Drizzle ORM and Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **Server Processing**: Express.js handles requests through registered routes
3. **Data Storage**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **UI Library**: Radix UI for accessible component primitives
- **Database**: Neon Database serverless PostgreSQL
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Replit Integration**: Development environment integration with runtime error overlay
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reloading**: Vite provides instant feedback during development
- **Type Checking**: `npm run check` validates TypeScript across the project

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: esbuild bundles server code for Node.js
- **Asset Organization**: Built files organized in `/dist` directory
- **Environment Variables**: DATABASE_URL required for database connection

### Database Management
- **Schema Updates**: `npm run db:push` applies schema changes
- **Migration System**: Drizzle Kit manages database migrations
- **Connection**: Uses connection pooling via Neon serverless driver

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository for easier development and deployment
2. **TypeScript Throughout**: Ensures type safety and better developer experience across the entire stack
3. **Component-Based UI**: Modular React components with shadcn/ui for consistent design system
4. **Storage Abstraction**: Interface-based storage layer allows for easy switching between in-memory and database implementations
5. **Vite Integration**: Provides fast development experience with HMR and optimized production builds
6. **Shared Schema**: Single source of truth for data models using Drizzle ORM and Zod validation