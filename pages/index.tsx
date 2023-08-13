import Link from "next/link";
import { getVendorsData } from "../lib/vendors";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const vendorsData = await getVendorsData();

  return {
    props: {
      vendorsData,
    },
  };
}

const IndexPage = ({ vendorsData }) => (
  <Layout title="Food delivery - Shop">
    <h1>{vendorsData}</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
