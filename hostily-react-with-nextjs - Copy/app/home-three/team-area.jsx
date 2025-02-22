import { useState ,useEffect} from "react";
import { FaTshirt, FaShieldAlt, FaPalette, FaMagic, FaSun, FaLeaf, FaBolt, FaTruck, FaVirusSlash, FaArrowRight } from "react-icons/fa";

const laundryProcesses = [
  {
    title: "Separate Wash For Each Customer",
    icon: <FaTshirt style={{ color: "#3b82f6", fontSize: "32px" }} />,
    description: "We wash each customer's clothes separately, ensuring hygiene and preventing mix-ups. Trusted by over 20 Lac+ customers, we follow all WHO & CDC safety guidelines and use medical-grade disinfectants.",
    addons: ["Medical-grade disinfectants", "Follows WHO & CDC guidelines"],
  },
  {
    title: "100% Garment Care Label Adherence",
    icon: <FaShieldAlt style={{ color: "#10b981", fontSize: "32px" }} />,
    description: "Our expert team ensures 100% adherence to garment care labels, eliminating any risk of damage to your clothes.",
    addons: ["Expert team in Coimbatore", "Guaranteed safety"],
  },
  {
    title: "Color Bleeding Proof Process",
    icon: <FaPalette style={{ color: "#ef4444", fontSize: "32px" }} />,
    description: "Before washing, all clothes are tested for color bleed. Any bleeding garments are washed separately using mild detergents to prevent color transfer.",
    addons: ["Mild detergents used", "Zero color transfer"],
  },
  {
    title: "Zero Shrinkage Guaranteed",
    icon: <FaMagic style={{ color: "#8b5cf6", fontSize: "32px" }} />,
    description:
      "We use high-quality chemicals, machines, and controlled processes to ensure your garments retain their original size with zero shrinkage.",
    addons: ["Advanced machine technology", "Zero fabric damage", "Temperature-controlled process"],
  },
  {
    title: "Crisp Wrinkle-Free Steam Iron",
    icon: <FaSun style={{ color: "#f59e0b", fontSize: "32px" }} />,
    description: "Our Italian steam ironing technology ensures a wrinkle-free and crisp finish for your clothes.",
    addons: ["Steam-based ironing", "No fabric burn risk", "Extra smooth finish"],
  },
  {
    title: "100% Fabric Life & Color Preserved",
    icon: <FaLeaf style={{ color: "#16a34a", fontSize: "32px" }} />,
    description: "We use pro-fabric chemicals that preserve both fabric strength and color vibrancy.",
    addons: ["Pro-fabric safe chemicals", "Longer fabric life", "Enhanced color vibrancy"],
  },
  {
    title: "Whitex Technology For Brighter Whites",
    icon: <FaBolt style={{ color: "#eab308", fontSize: "32px" }} />,
    description:
      "Our Whitex technology enhances whiteness, making your white garments (shirts, kurtas, etc.) look up to 3 shades brighter.",
    addons: ["Advanced whitening formula", "Safe on all fabrics", "Brightens up to 3 shades"],
  },
  {
    title: "Free Pickup & Delivery",
    icon: <FaTruck style={{ color: "#3b82f6", fontSize: "32px" }} />,
    description: "Enjoy hassle-free service with **free doorstep pickup and delivery** across Coimbatore.",
    addons: ["Available in Coimbatore", "Time-saving & convenient", "100% free service"],
  },
];

export default function LaundryProcess() {
  
  const [selectedProcess, setSelectedProcess] = useState(laundryProcesses[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (



<div className="flex flex-col items-center w-full min-h-screen bg-white p-5">
<h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Why Choose Mr. Laundry?</h1>

{isMobile ? (
  // Mobile Layout - Cards
  <div className="flex flex-col w-full max-w-2xl">
    {laundryProcesses.map((process, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-xl p-5 mb-4 shadow-lg transition-all transform hover:scale-105"
      >
        <div className="flex items-center space-x-4">
          {process.icon}
          <h2 className="text-lg font-semibold text-gray-800">{process.title}</h2>
        </div>
        <p className="mt-2 text-gray-600">{process.description}</p>
        <ul className="mt-3 pl-5 list-disc text-gray-700">
          {process.addons.map((addon, i) => (
            <li key={i} className="flex items-center">
              ✅ {addon}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
) : (
  // Desktop Layout - Sidebar + Content
  <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    background: "#fff",
    padding: "20px",
  }}
>
  {/* Title */}
  <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px", color: "#1e293b" }}>
    Why Choose Mr. Laundry?
  </h1>

  <div
    style={{
      display: "flex",
      width: "90%",
      maxWidth: "1200px",
      height: "80vh",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      background: "#fff",
    }}
  >
    {/* Left Section */}
    <div
      style={{
        flex: 1,
        padding: "20px",
        borderRight: "2px solid #ddd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f8fafc",
      }}
    >
      {laundryProcesses.map((process, index) => (
        <div
          key={index}
          onClick={() => setSelectedProcess(process)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px",
            marginBottom: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            background: selectedProcess.title === process.title ? "#e5e7eb" : "transparent",
            borderRadius: "8px",
            width: "100%",
            boxShadow: selectedProcess.title === process.title ? "2px 4px 8px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          {process.icon}
          <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500", color: "#1e293b" }}>
            {process.title}
          </span>
          <FaArrowRight style={{ marginLeft: "auto", fontSize: "18px", color: "#64748b" }} />
        </div>
      ))}
    </div>

    {/* Right Section */}
    <div
      style={{
        flex: 1.5,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h2 style={{ fontSize: "26px", fontWeight: "600", color: "#1e293b" }}>
        {selectedProcess.title}
      </h2>
      <p style={{ fontSize: "16px", marginTop: "10px", color: "#475569", lineHeight: "1.5" }}>
        {selectedProcess.description}
      </p>
      <ul style={{ marginTop: "20px", paddingLeft: "20px" }}>
        {selectedProcess.addons.map((item, index) => (
          <li key={index} style={{ fontSize: "16px", color: "#0f172a", marginBottom: "5px" }}>
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
)}
</div>
  );
}
