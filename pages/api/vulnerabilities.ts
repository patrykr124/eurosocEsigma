'use server'

export const fetchVulnerabilities = async () => {
    try {
        const response = await fetch('https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=10',
            {
                method: 'GET',
                headers: {
                    'apiKey': process.env.NIST_API_KEY || '',
                },
            }
            )

        if (!response.ok) throw new Error(`Błąd API: ${response.statusText}`);

        const data = await response.json()
        return data.results
    } catch(error) {
        console.log('Błąd podczas pobierania');
        return null

    }

}