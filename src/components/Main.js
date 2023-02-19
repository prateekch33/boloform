import React from "react";
import Hero from "./Hero";
import Scroller from "./Scroller";
import Testimonials from "./Testimonials";
import Testimonials2 from "./Testimonials2";
import Working from "./Working";
import Features from "./Features";
import data from "./testimonials_data";
import Premium from "./Premium";
import Testimonials3 from "./Testimonials3";
import Workflows from "./Workflows";
import Guarantee from "./Guarantee";
import Support from "./Support";
import Faq from "./Faq";
import CustomerTrust from "./CustomerTrust";

export default function Main() {
  return (
    <div className="inner-main">
      <Hero />
      <Scroller />
      <Working />
      <Testimonials
        test={data[0].img}
        desc={data[0].desc}
        name={data[0].name}
      />
      <Features />
      <Testimonials
        test={data[1].img}
        desc={data[1].desc}
        name={data[1].name}
      />
      <Testimonials2
        test={data[2].img}
        desc={data[2].desc}
        name={data[2].name}
      />
      <Premium />
      <Testimonials3
        test={data[5].img}
        desc={data[5].desc}
        name={data[5].name}
        desig={data[5].desig}
      />
      <Workflows />
      <Testimonials
        test={data[3].img}
        desc={data[3].desc}
        name={data[3].name}
      />
      <Testimonials2
        test={data[4].img}
        desc={data[4].desc}
        name={data[4].name}
      />
      <Guarantee />
      <Support />
      <Faq />
      <CustomerTrust />
    </div>
  );
}
