import {fetchVulnerabilities} from "@/pages/api/vulnerabilities";

async function Vurnerabilities() {
    const data = await fetchVulnerabilities();

    console.log(data)

    return (
        <div>123</div>
    );
}

export default Vurnerabilities;