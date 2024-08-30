import questions from "../../assets/images/faq.png";
import chat from "../../assets/images/rvw.png";
import whatsapp from "../../assets/images/whs.png";
import call from "../../assets/images/phc.png";
import report from "../../assets/images/ros.png";
import review from "../../assets/images/str.png";
import { FaArrowRight } from "react-icons/fa";

const help = [
  {
    image: questions,
    title: "Frequently Asked Questions",
    subTitle: "See FAQ",
    link: "#",
  },
  {
    image: chat,
    title: "Live Chat",
    subTitle: "Chat Now",
    link: "#",
  },
  {
    image: whatsapp,
    title: "Whatsapp",
    subTitle: "Drop a Message",
    link: "https://wa.me/09048401533",
  },
  {
    image: call,
    title: "Phone Call",
    subTitle: "Call Us",
    link: "09048401533",
  },
  {
    image: report,
    title: "Report Our Support",
    subTitle: "Not Satisfied?",
    link: "#",
  },
  {
    image: review,
    title: "Review Our App",
    subTitle: "Coming Soon",
    link: "#",
  },
];

const HelpAndSupport = () => {
  return (
    <main className="ml-64 p-9">
      <section className="grid grid-cols-2 gap-5 xl:w-[70%]">
        {help.map((item, i) => (
          <section
            key={i}
            className=" flex items-center gap-3 border p-3 rounded-2xl"
          >
            <img src={item.image} alt={item.title} className="" />

            <div>
              <h2 className="text-[16px] font-semibold text-[#6882B6]">
                {item.title}{" "}
              </h2>
              <a
                href={
                  item.link.startsWith("09048401533")
                    ? `tel:${item.link}`
                    : item.link
                }
                className={`text-sm text-[#4169E1] font-medium flex items-center gap-7 mt-1 ${
                  item.subTitle.includes("Coming Soon") &&
                  "bg-[#EFF3FB] w-fit p-0.5 px-2 rounded-2xl"
                }`}
              >
                {item.subTitle}

                {!item.subTitle.includes("Coming Soon") && (
                  <span>
                    <FaArrowRight />
                  </span>
                )}
              </a>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default HelpAndSupport;
