import About from "../components/JobPortalSections/components/About";
import Footer from "../components/JobPortalSections/components/Footer";
import NavBar from "../components/JobPortalSections/components/NavBar";
import SEO from "../SEO/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About CareerKhoj"
        description="Learn more about CareerKhoj, our mission to connect job seekers and employers in Nepal, and how we’re transforming the hiring process."
        url="https://careerkhoj.balgobindchaudhary.com.np/about"
      />

      <SEO
        title="Contact CareerKhoj"
        description="Reach out to CareerKhoj for support, inquiries, and partnerships. We’re here to help you hire or find your dream job."
        url="https://careerkhoj.balgobindchaudhary.com.np/contact"
      />

      <SEO
        title="Post a Job – Hire Top Talent in Nepal"
        description="Post your job openings on CareerKhoj and hire skilled professionals across Nepal. Reach thousands of qualified candidates instantly."
        url="https://careerkhoj.balgobindchaudhary.com.np/post-job"
      />

      <NavBar />
      <About />
      <Footer />
    </>
  );
}
