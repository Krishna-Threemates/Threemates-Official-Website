import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Threemates — Modern IT Solutions & Software Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
                    fontFamily: "system-ui, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Background pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(37,99,235,0.2) 0%, transparent 40%)",
                        display: "flex",
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 10,
                        padding: "0 80px",
                        textAlign: "center",
                    }}
                >
                    {/* Logo text */}
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            color: "white",
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            marginBottom: 20,
                            display: "flex",
                        }}
                    >
                        THREEMATES
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            width: 80,
                            height: 4,
                            background: "rgba(255,255,255,0.4)",
                            borderRadius: 2,
                            marginBottom: 24,
                            display: "flex",
                        }}
                    />

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 28,
                            color: "rgba(255,255,255,0.85)",
                            fontWeight: 500,
                            lineHeight: 1.4,
                            maxWidth: 700,
                            display: "flex",
                        }}
                    >
                        Modern IT Solutions & Software Development
                    </div>

                    {/* Services pills */}
                    <div
                        style={{
                            display: "flex",
                            gap: 12,
                            marginTop: 32,
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        {["ERP Systems", "SaaS Platforms", "Web Apps", "Mobile Apps"].map(
                            (label) => (
                                <div
                                    key={label}
                                    style={{
                                        padding: "8px 20px",
                                        background: "rgba(255,255,255,0.12)",
                                        borderRadius: 50,
                                        color: "rgba(255,255,255,0.9)",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        display: "flex",
                                    }}
                                >
                                    {label}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: "linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8, #2563eb, #3b82f6)",
                        display: "flex",
                    }}
                />

                {/* URL */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 24,
                        right: 40,
                        fontSize: 16,
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 500,
                        display: "flex",
                    }}
                >
                    threemates.tech
                </div>
            </div>
        ),
        { ...size }
    );
}
