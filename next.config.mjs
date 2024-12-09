import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @types {import('next').NextConfig} */


const nextConfig = {};

export default withNextIntl(nextConfig);


