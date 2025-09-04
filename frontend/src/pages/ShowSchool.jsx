import { toast } from "react-toastify";
import axios from "../utils/axios";
import { useEffect } from "react";

const ShowSchools = () => {
  // Dummy data (later replace with API data)
  const schools = [
    {
      id: 1,
      name: "Green Valley High School",
      address: "123 Park Street",
      city: "Mumbai",
      image: "https://via.placeholder.com/300x200.png?text=School+1",
    },
    {
      id: 2,
      name: "Sunrise Public School",
      address: "456 River Road",
      city: "Delhi",
      image: "https://via.placeholder.com/300x200.png?text=School+2",
    },
    {
      id: 3,
      name: "Bluebell Academy",
      address: "789 Lake View",
      city: "Bangalore",
      image: "https://via.placeholder.com/300x200.png?text=School+3",
    },
  ];

  useEffect(() => {
    const renderData = async () => {
      const response = await axios.get("/showSchool");

      try {
        if (response.status == 200) {
          console.log(response)
          
        } else throw err("Error during fetching Data from DB..");
      } catch (err) {
        // toast.error(err.response?.data.error || "something got wrong...");
        console.error("Error :", err.message);
      }
    };

    renderData();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-800 p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-emerald-400 text-center mb-8">
        Schools Directory
      </h1>

      {/* School Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((school) => (
          <div
            key={school.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:shadow-emerald-500/20 transition"
          >
            <img
              src={school.image}
              alt={school.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-emerald-400">
                {school.name}
              </h2>
              <p className="text-zinc-300 text-sm mt-1">{school.address}</p>
              <p className="text-zinc-400 text-sm">{school.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
