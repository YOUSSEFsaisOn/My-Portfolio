// data/projects.ts
// Single source of truth for every project shown on the "Projects" section
// and on each project's full detail page at /projects/[slug].

export type ProjectSection = {
  heading: string;
  intro?: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string; // short card description
  liveUrl: string;
  overview: string; // opening paragraph on the detail page
  sections: ProjectSection[];
};

export const PROJECTS: Project[] = [
  // ---------------------------------------------------------------------
  // 1. Compass College (TeachingProject)
  // ---------------------------------------------------------------------
  {
    slug: "compass-college",
    title: "Compass College",
    category: "Education",
    summary:
      "A streamlined e-learning platform focused on structured courses, lessons, and exams, with a single-role admin system and a public student-facing experience.",
    liveUrl: "https://compass.college/",
    overview:
      "A streamlined e-learning platform focused on structured courses, lessons, and exams, with a single-role admin system and a public student-facing experience.",
    sections: [
      {
        heading: "Role & Access Logic",
        items: [
          "Simple, centralized single-role authorization — every management action (courses, lessons, exams, instructors, etc.) is gated by one fixed admin role.",
          "Students interact through open or basic-auth endpoints — no complex permission layers.",
        ],
      },
      {
        heading: "Admin Panel",
        items: [
          "Dashboard Overview — a real-time snapshot of platform numbers.",
          "User Directory — a full list of registered users for admin oversight.",
          "Instructor Management — create, update, delete, and list instructors.",
          "Course Management — full course lifecycle, plus a dedicated Active/Inactive toggle to hide a course from the public site without deleting it, and a separate admin-only view showing every course's real status.",
          "Lessons — courses are broken down into lessons, each independently manageable and fetchable per course.",
          "Exams Engine — full exam lifecycle (create, edit, delete, list). Question bank: questions and their answers are managed as separate, reusable entities, each independently created, edited, and deleted, then assembled into exams. Students submit their exam attempt and can retrieve their result afterward.",
          "Submissions log — admins can review every submission platform-wide or filtered per exam, useful for grading and auditing.",
          "Digital Library (Books) — upload and manage files, retrievable by ID or filtered by instructor.",
          "Testimonials — publicly visible reviews, added/removed by admins only.",
          "User Management — view profile info, update profile picture, and reset password per user.",
        ],
      },
      {
        heading: "Public Website",
        items: [
          "Full authentication flow: registration, login, session refresh, logout, email confirmation, and forgot/reset password.",
          "Students can browse active courses, view lessons, take exams, and check their results.",
          "Integrated Paymob payment flow for course purchases.",
        ],
      },
      {
        heading: "Security",
        items: [
          "Token-based authentication with automatic session refresh.",
          "Courses are only visible to the public once explicitly marked active — unpublished courses stay admin-only.",
          "Exam and submission data access is restricted to the exam owner and admins.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 2. ET Engineering Academy
  // ---------------------------------------------------------------------
  {
    slug: "et-engineering-academy",
    title: "ET Engineering Academy",
    category: "Education",
    summary:
      "A complete e-learning platform for an engineering education brand, combining a role-based admin panel with a public student website and integrated online payments.",
    liveUrl: "https://etengineeringacademy.com",
    overview:
      "A complete e-learning platform for an engineering education brand, combining a role-based admin panel with a public student website and integrated online payments.",
    sections: [
      {
        heading: "Role & Access Logic",
        items: [
          "Simple, centralized single-role authorization model — every admin-only action is gated by one fixed role, keeping the access logic lightweight and easy to reason about.",
          "Public/student features (browsing courses, articles, reviews, downloading books) are either fully open or require basic login only — no special role needed.",
        ],
      },
      {
        heading: "Admin Panel",
        items: [
          "Dashboard Overview — a real-time summary of platform-wide numbers (courses, instructors, students, and more) at a glance.",
          "Payments History — a full, searchable log of every transaction made on the platform.",
          "Enrollment Management — admins can view every course a specific user owns, and manually assign or remove a course from their account — completely independent of the payment flow, covering manual grants, refunds, or corrections without needing a fake transaction.",
          "Instructor Management — full control to create, update, delete, and list instructors.",
          "Course Management — full course lifecycle management, plus a dedicated Active/Inactive toggle to hide a course from the public site without deleting it, and a separate admin-only view into every course's real status (including inactive/expired ones).",
          "Video Management — upload, edit, and organize lecture videos, retrievable by course.",
          "Course Packages — packages are built as a flexible bundle: courses can be added or removed individually from a package without touching the rest of it, so the package always reflects the latest available courses.",
          "Zoom Live Sessions — a fully separate content type for live meeting-based courses, managed independently from standard online courses.",
          "Offline Courses — managed as their own distinct content type, separate from online courses.",
          "Offers — a discount/promotions system that can be viewed and updated.",
          "Digital Library (Books) — admins upload and manage files, while students can browse the library filtered by category/type.",
          "Articles — a lightweight content system: publicly readable, but only admins can create, edit, or delete.",
          "Testimonials — publicly visible customer reviews, managed (added/removed) by admins only.",
          "User Management — view profile info, update profile pictures, and reset passwords per user.",
        ],
      },
      {
        heading: "Public Website",
        items: [
          "Full authentication flow: registration, login, session refresh, logout, email confirmation, and forgot/reset password.",
          "Students can freely browse active courses, packages, offline courses, live sessions, articles, and reviews.",
          "Integrated Paymob payment flow — secure checkout, automatic payment confirmation, and access to the latest payment record.",
        ],
      },
      {
        heading: "Security",
        items: [
          "Secure, token-based authentication with automatic session refresh.",
          "Courses are only visible to the public once explicitly marked active — unpublished or expired courses stay hidden from the main course list, visible only inside the admin panel.",
          "Video playback is authenticated and access-controlled per user.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // 3. U-Learn
  // ---------------------------------------------------------------------
  {
    slug: "u-learn",
    title: "U-Learn",
    category: "Multi-Tenant LMS",
    summary:
      "A full-scale, role-based LMS built to serve multiple education businesses (Centers), independent instructors, and students under one platform — with granular, permission-driven access control at every layer.",
    liveUrl: "https://u-learn.runasp.net",
    overview:
      "A full-scale, role-based LMS built to serve multiple education businesses (Centers), independent instructors, and students under one platform — with granular, permission-driven access control at every layer.",
    sections: [
      {
        heading: "Role & Permission System (Core Logic)",
        items: [
          "Three-tier hierarchy: Super Admin → Center → Instructor → Student.",
          "A Center account can own multiple Instructors; each Instructor can own their own Students, or a Student can be additionally enrolled with more than one Instructor (many-to-many enrollment).",
          "Claims-based permission system — every account (Center or Instructor) is granted a specific, granular set of permissions (e.g., Courses.Create, Exams.Grade, Users.Read) rather than a fixed role, allowing fully customizable access per user.",
          "Centers can only grant permissions they themselves hold when creating instructors — preventing privilege escalation.",
          "Modules system — Centers unlock optional feature modules (e.g., Scheduling/Rooms) that are purchased/enabled by a Super Admin, gating access to specific functionality platform-wide.",
          "Encrypted JWT tokens — permissions are never exposed client-side; the frontend must call a dedicated endpoint to know what it can do.",
        ],
      },
      {
        heading: "Academic Structure",
        items: [
          "Courses → Lessons → Assignments/Exams hierarchy, each independently manageable.",
          "Groups (Classes) — students are organized into groups with a weekly schedule, an assigned center, and a room; lessons, assignments, and exams can be attached directly to a group.",
          "Attendance system — per-session register with per-student summaries and attendance-rate calculation.",
        ],
      },
      {
        heading: "Assessments Engine",
        items: [
          "Assignments — two types: file/text submission or structured questions (yes/no, single choice, multiple choice, open-ended).",
          'Exams — timed, auto-gradable, with live anti-cheat monitoring: every suspicious action (copy attempt, tab switch) is logged as a "violation" for instructor review — without interrupting the student\'s exam session.',
          "Points/Gamification System — configurable point values and pass marks per instructor; automatic point awards recalculated from source records, plus manual bonus/penalty entries, each with full history per student.",
          "Statistics Dashboard — per-student and per-course performance breakdowns (submission rates, pass rates, averages).",
        ],
      },
      {
        heading: "Enrollment Workflow (No Self-Signup)",
        items: [
          "Students can't create their own accounts — they submit a Join Request (to an instructor) or a Reservation (to a center), which staff reviews and manually converts into an account, preventing spam/fake registrations.",
          "Public profile pages for instructors, centers, and center-owner storefronts — a guest-facing directory before any signup happens.",
        ],
      },
      {
        heading: "Video Security — Two-Tier System",
        items: [
          "Level 1 — basic protected upload/playback.",
          "Level 2 — encrypted, segmented HLS-style streaming (playlist + encryption key + individual segments served separately), making direct video downloading effectively impossible.",
        ],
      },
      {
        heading: "Payments & Digital Library",
        items: [
          "Integrated payment gateway with token-based checkout and server-side payment callbacks.",
          "Books/Files library with granular read/download permissions, filterable by instructor.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}