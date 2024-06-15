import CompanyWork from "@/components/CompanyWork";
import DevlopmentCircle from "@/components/DevlopmentCircle";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import { useContext, useState } from "react";
import Container from "@/components/Container";

const Home = () => {
  return (
    <Container>
      <Header />
      <CompanyWork />
      <Solutions />
      <DevlopmentCircle />
      <Services />
    </Container>
  );
};
export default Home;
