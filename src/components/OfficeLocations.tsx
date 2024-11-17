import React from "react";

interface OfficeLocation {
  city: string;
  address: string[];
  phone: string;
  email: string;
  imageUrl: string;
}

interface OfficeLocationsProps {
  locations: OfficeLocation[];
}

const OfficeLocations: React.FC<OfficeLocationsProps> = ({ locations }) => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-[10vw] py-[10vh] bg-gray-200 mt-[10vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-row items-start text-center">
            <img
              src={location.imageUrl}
              alt={`${location.city} office`}
              className="w-44 h-44 mb-4 object-contain"
            />
            <div className="flex flex-col text-left gap-4 mt-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {location.city}
              </h3>

              <div className="space-y-1 mb-4 text-xl">
                {location.address.map((line, i) => (
                  <p key={i} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>

              <div className="space-y-1 text-gray-600 text-xl">
                <p>
                  <a
                    href={`tel:${location.phone}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {location.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${location.email}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {location.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeLocations;
