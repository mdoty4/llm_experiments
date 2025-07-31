# LLM-Generated Full-Stack Web Application with Authentication (Experimental)

> ⚠️ **Note**: This project was generated using a **local LLM (GLM 4.5 Air MoE)** via **RooCode** in the **VS Code IDE**.  
> It is an experimental demonstration of AI-assisted full-stack app generation and is **not intended for production use**.  
> The purpose is to explore the current capabilities of local LLMs for software prototyping and development workflows.


A modern full-stack web application built with React, Node.js/Express, Prisma ORM, and PostgreSQL featuring user authentication, JWT tokens, and protected routes.

## Tech Stack

### Frontend
- **React** with TypeScript
- **React Router** for client-side routing
- **Axios** for API calls
- **bcryptjs** for password hashing (frontend validation)

### Backend
- **Node.js** with Express
- **TypeScript**
- **Prisma ORM** for database management
- **PostgreSQL** as the database
- **JWT** (JSON Web Tokens) for authentication
- **bcrypt** for password hashing

## Features

### Authentication System
- User registration with email and password
- Secure login with JWT token generation
- Password hashing using bcrypt (10 rounds)
- Protected routes requiring authentication
- Automatic token refresh and validation

### User Profile
- GET `/api/profile` endpoint returns user's name and email
- Protected profile page showing user data after login
- User creation timestamp tracking

### Frontend Pages
- `/register` - User registration form with validation
- `/login` - Login form with JWT token handling in localStorage
- `/profile` - Protected profile page showing user data
- `/playground` - Placeholder for future GLM integration

### Security Features
- JWT token-based authentication
- Password hashing with bcrypt
- CORS configuration for cross-origin requests
- Helmet.js for security headers
- Input validation and sanitization

## Project Structure

```
boilerplate_app/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ProtectedRoute.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Register.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Playground.tsx
│   │   ├── services/       # API and auth services
│   │   │   ├── api.ts
│   │   │   └── authService.ts
│   │   ├── App.tsx         # Main app component with routing
│   │   └── index.tsx       # React entry point
│   ├── package.json
│   └── .env               # Frontend environment variables
├── backend/                # Node.js Express API server  
│   ├── src/
│   │   ├── controllers/    # Auth and Profile controllers
│   │   │   ├── authController.ts
│   │   │   └── profileController.ts
│   │   ├── middleware/     # JWT validation, error handling
│   │   │   └── jwt.ts
│   │   ├── routes/        # API route definitions
│   │   │   ├── authRoutes.ts
│   │   │   ├── profileRoutes.ts
│   │   │   └── playgroundRoutes.ts
│   │   ├── utils/         # JWT helpers, password hashing
│   │   │   └── jwt.ts
│   │   ├── app.ts         # Express app configuration
│   │   └── index.ts       # Server entry point
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── package.json
│   ├── tsconfig.json      # TypeScript configuration
│   └── .env              # Backend environment variables
├── docker-compose.yml     # PostgreSQL container setup
└── README.md             # This file
```

## Database Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
}
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
  - Body: `{ email, password, name? }`
- `POST /api/auth/login` - User login
  - Body: `{ email, password }`
  - Returns: JWT token and user data

### Protected Routes
- `GET /api/profile` - Get user profile (requires authentication)
  - Returns: User's name, email, and creation date

### Bonus
- `GET /api/playground` - Placeholder for future GLM integration

## Environment Variables

### Backend (.env)
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
DATABASE_URL="postgresql://postgres:password@localhost:5432/boilerplate_app?schema=public"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:3001/api
```

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Docker (optional, for PostgreSQL)

### Option 1: Using Docker (Recommended)

1. **Start PostgreSQL**
   ```bash
   docker-compose up -d postgres
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Generate Prisma client and run migration
   npx prisma generate
   npm run prisma:migrate
   
   # Seed the database with test data
   npm run prisma:seed
   ```

3. **Start Backend**
   ```bash
   npm run dev
   ```

4. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Option 2: Local PostgreSQL

1. **Install PostgreSQL** locally and create database `boilerplate_app`

2. **Update Backend .env**
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/boilerplate_app?schema=public"
   ```

3. **Follow steps 2-4** from Option 1

## Development Workflow

### Backend Development
```bash
cd backend

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database operations
npx prisma studio          # Open Prisma Studio (database GUI)
npm run prisma:migrate     # Create new migration
npm run prisma:seed        # Run seed script
```

### Frontend Development
```bash
cd frontend

# Start development server
npm start

# Build for production
npm run build

# Run tests (if added)
npm test
```

## Testing the Application

### Test User Account
The seed script creates a test user:
- **Email**: `test@example.com`
- **Password**: `password123`

### Authentication Flow
1. Visit `http://localhost:3000`
2. Click "Sign up" to create a new account
3. Or use the test credentials to sign in
4. After login, you'll be redirected to `/profile`
5. The profile page shows your user data
6. Try accessing `/playground` for the bonus feature

### Protected Routes Test
1. Open browser in private/incognito mode
2. Try to access `/profile` directly - should redirect to `/login`
3. Login successfully
4. Try accessing `/profile` again - should work now

## Security Considerations

- **JWT Secret**: Change the default JWT secret in production
- **HTTPS**: Always use HTTPS in production
- **Password Strength**: Implement stronger password requirements for production
- **Rate Limiting**: Consider adding rate limiting to auth endpoints
- **CORS**: Configure CORS properly for your production domain

## Future Enhancements

### Database
- Add more user fields (profile picture, bio, etc.)
- Implement refresh token rotation
- Add email verification

### Frontend
- Add form validation libraries (Formik, React Hook Form)
- Implement password strength indicator
- Add loading states and error handling improvements

### Backend
- Add rate limiting middleware
- Implement email verification system
- Add password reset functionality
- Add API documentation (Swagger/OpenAPI)

### Playground Integration
- Implement GLM chat interface
- Add document analysis features
- Integrate code generation capabilities

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in backend/.env
   - Verify database credentials

2. **CORS Issues**
   - Check FRONTEND_URL in backend/.env
   - Ensure frontend and backend are on correct ports

3. **JWT Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token storage in localStorage
   - Validate token expiration

4. **Build Errors**
   - Ensure all dependencies are installed
   - Check TypeScript types
   - Verify file paths and imports

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.