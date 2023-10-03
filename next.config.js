/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo.vercel.store',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
