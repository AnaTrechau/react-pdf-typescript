import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});


const Home = () => {
  return (
    <PDFViewer />
  )
}

export default Home
