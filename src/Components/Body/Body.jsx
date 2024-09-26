import blogImg from "../../Assets/blog39.png";
import ScrollNavbar from "../ScrollNavbar/ScrollNavbar";

const Body = () => {
  return (
    <>
      <ScrollNavbar />
      <div className="blog-content px-4 lg:px-[10.8rem] py-4 lg:py-[1.5rem] bg-gray-200">
        <div className="blog-content-container rounded-3xl p-5 lg:p-20 bg-white">
          <h1 className="font-bold text-xl lg:text-3xl mb-2" style={{ color: "#3a3632" }}>
            Statistical Approaches for Balancing Ethical Privacy & Data-Driven Innovation
          </h1>
          <img src={blogImg} alt="blogImg" className="w-full h-auto" />
          <p className="font-bold mt-3 mb-2">Introduction:</p>
          <p className="mb-2">
            Information communication technologies like online social networking spots, cloud computing technologies, and messaging operations are rapidly increasing...
          </p>
          <p className="font-bold mt-3 mb-2">
            The significance of data privacy from a user and business perspective is as follows:
          </p>
          <p className="font-bold mt-3 mb-2">For Individuals</p>
          <p className="mb-2">
            Individuals can be empowered by privacy laws to have control over their data...
          </p>
          <p className="font-bold mt-3 mb-2">From a Business Perspective</p>
          <p className="mb-2">
            Recycling particular data cannot be done without businesses operating...
          </p>
          <p className="font-bold mt-3 mb-2">Data-Driven Innovation</p>
          <p className="mb-2">
            Big data serves thousands of innovative products...
          </p>
          <p className="font-bold mt-3 mb-2">A Case of Data-Driven Optimization</p>
          <p className="mb-2">
            House of Cards by Netflix was one of its flagship programs...
          </p>
          <p className="font-bold mt-3 mb-2">Holistic Approach to Data Privacy</p>
          <p className="mb-2">The three core pillars need to be understood...</p>
          <p className="font-bold mt-3 mb-2">Sensitive data needs to be discovered and classified</p>
          <p className="mb-2">
            Data is classified (linked and grouped), grounded on specific patterns and algorithms...
          </p>
          <p className="font-bold mt-3 mb-2">Securing Sensitive Data</p>
          <p className="mb-2">
            The threat of each data set to our business determines by data discovery and classification...
          </p>
          <p className="font-bold mt-3 mb-2">Enforcement of Holistic Data Protection Strategy</p>
          <p className="mb-2">
            1. Sensitive data are searched for in different data stores by set programs...
          </p>
          <p className="font-bold mt-3 mb-2">Conclusion</p>
          <p className="mb-2">
            The exponential growth of big data and the widespread adoption of data-driven technologies have opened up new opportunities...
          </p>
          <p>
            <a href="https://lejhro.com/" className="text-blue-600">www.lejhro.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
