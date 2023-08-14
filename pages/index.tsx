import Link from "next/link";
import { getVendorsData } from "../lib/vendors";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const vendors = await getVendorsData();

  return {
    props: {
      vendors,
    },
  };
}

const IndexPage = ({ vendors }) => (
  <Layout title="Food delivery - Shop">
    <ul>
      {vendors.map((vendor) => (
        <li key={vendor}>
          <Link href={`/shop/${vendor}`}>{vendor}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;
