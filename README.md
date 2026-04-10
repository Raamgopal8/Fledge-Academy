# Fledge Academy - Japanese Language & Culture Academy

Fledge Academy is a premium, modern web application designed for a Japanese language learning institution. It features a highly interactive UI, a streamlined enrollment system, and comprehensive course information.

![Fledge Academy Hero](https://via.placeholder.com/1200x600/3B66AC/FFFFFF?text=Fledge+Academy+Learning+Experience)

## 🚀 Key Features

### 1. Interactive Learning Experience
- **Dynamic Hero Section**: Features floating 3D-style objects (Kintsugi, Origami) that respond to scroll, creating a "docking" effect.
- **Micro-Animations**: Uses Framer Motion for smooth transitions, swapping text, and interactive elements.
- **Premium Aesthetics**: Glassmorphism, tailored color palettes, and modern typography.

### 2. Enrollment & Lead Generation
- **Global Enrollment Modal**: A unified popup system accessible from any page, allowing users to express interest in specific courses.
- **FormSubmit.co Integration**: All forms (Contact, Enrollment, Newsletter) are integrated with FormSubmit.co for reliable email delivery without a custom backend.
- **Course-Specific Pre-filling**: Small-trigger enrollment buttons automatically select the relevant course in the interest dropdown.

### 3. Comprehensive Course Tiers
- **Structured Paths**: Detailed course curriculum for JLPT tiers (N5, N4, N3, etc.).
- **Visual Tiers**: Distinct color-coded headers and slanting linear gradient backgrounds for course cards.
- **Request Guidance**: Dedicated call-to-action for students who need mentorship to choose their path.

### 4. Communication & Connectivity
- **WhatsApp Widget**: A brand-accurate floating WhatsApp widget for direct business inquiries.
- **Blog & Newsletter**: A dedicated blog section with a synchronized newsletter subscription form.
- **Contact System**: A full contact page with map integration and social links.

## 🛠️ Technology Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS & Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: FormSubmit.co
- **Routing**: React Router DOM

## 📦 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Raamgopal8/Fledge-Academy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Fledge-Academy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── assets/          # Project images and graphics
├── components/      # Reusable UI components
│   ├── EnrollmentModal.jsx  # Global lead capture modal
│   ├── FloatingDockLayout.jsx # Hero section logic
│   ├── Navbar.jsx           # Responsive navigation
│   └── ...
├── context/         # React Context (ModalState, etc.)
├── pages/           # Page containers (Home, Courses, Blog, etc.)
└── App.jsx          # Main routing and provider setup
```

## 📝 Form Activation Note
For active lead generation, the email `[EMAIL_ADDRESS]` must have confirmed the initial activation email from FormSubmit.co.

---
Built with ❤️ for Fledge Academy.
