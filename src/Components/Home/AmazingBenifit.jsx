import Cost from "../../assets/images/amazing_benefits/cost_ai.png";
import faster from "../../assets/images/amazing_benefits/faster_ai.png";
import higly from "../../assets/images/amazing_benefits/Highly.png";
import inBuilt from "../../assets/images/amazing_benefits/In_builtr.png";
import ai from "../../assets/images/amazing_benefits/genarator_ai-operator.png";
import automted from "../../assets/images/amazing_benefits/automated.png";

const AmazingBenifit = () => {
  const amazings = [
    {
      img: Cost,
      heading: "60%",
      subheading: "Cost Reduce",
      para: "Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies",
    },
    {
      img: faster,
      heading: "50% Faster",
      subheading: "Recruitment by TAT",
      para: "Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies",
    },
    {
      img: higly,
      heading: "Highly Contextualized ",
      subheading: "Interview",
      para: "Al models generate highly contextualized interviews for the candidates based on your Company profile, Job description and Candidate's CV.",
    },
    {
      img: automted,
      heading: "Automated",
      subheading: "Scheduling",
      para: "Email & WhatsApp based communication for interview scheduling with automated reminders.",
    },
    {
      img: ai,
      heading: "AI generated Interviews",
      subheading: "On what matters",
      para: "0 manual interventions, completely seamless experience for the candidates.",
    },
    {
      img: inBuilt,
      heading: "in-built",
      subheading: "ATS",
      para: "To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-4xl my-10 text-custom-purple text-center">
        <span className="font-bold">Our Amazing Benefits</span>{" "}
        <span className="font-medium">Helpful For Your Hiring</span>
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {amazings.map((a, index) => (
          <div key={index} className="w-96">
            <div>
              <img src={a.img} alt="" />
            </div>
            <h1 className="text-2xl font-bold">{a.heading}</h1>
            <h4 className="text-2xl">{a.subheading}</h4>
            <p>{a.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingBenifit;
