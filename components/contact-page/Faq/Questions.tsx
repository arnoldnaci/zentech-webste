import "./index.css";
import Item from "./item/Item";

const Accordian = () => {
  const data = [
    {
      id: 1,
      question: "What services does your software agency company offer?",
      answer:
        "Our software agency company specializes in a wide range of services including custom software development, web application development, mobile app development, UI/UX design, quality assurance, and software maintenance and support.",
    },
    {
      id: 2,
      question:
        "How do you ensure the security of the software developed by your company?",
      answer:
        "At our software agency, security is of paramount importance. We follow industry best practices and employ robust security measures throughout the software development lifecycle.",
    },
    {
      id: 3,
      question: "Can you handle projects of different scales and complexities?",
      answer:
        "Absolutely! Our software agency has a talented team of experienced professionals capable of handling projects of various scales and complexities. Whether you need a simple web application or a large-scale enterprise solution, we have the expertise and resources to deliver high-quality software tailored to your specific requirements.",
    },
    { 
      id: 4,
      question:
        "How do you ensure effective communication and collaboration with clients during the development process?",
      answer:
        "We understand the importance of communication and collaboration for successful project execution. Our software agency adopts a transparent and collaborative approach, providing regular updates and maintaining open channels of communication with our clients.",
    },
  ];

  return ( 
    <main className="main-container">
      <h1 className="title">
        Frequently asked <span className="bold">questions</span>
      </h1>
      <div className="accordian">
        {data.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </main>
  );
};

export default Accordian;
