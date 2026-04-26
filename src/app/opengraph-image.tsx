import {ImageResponse} from "next/og";

export const runtime = "edge";
export const alt = "Circolo ANSPI Don Primo Mazzolari — Vezzano sul Crostolo";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default async function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #1e4380 0%, #2c5aa0 60%, #4a7dc5 100%)",
                    color: "white",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        textTransform: "uppercase",
                        letterSpacing: 6,
                        opacity: 0.85,
                        marginBottom: 24,
                    }}
                >
                    APS · ETS · RUNTS
                </div>
                <div
                    style={{
                        fontSize: 84,
                        fontWeight: 800,
                        lineHeight: 1.05,
                        marginBottom: 24,
                    }}
                >
                    Circolo ANSPI
                    <br/>
                    Don Primo Mazzolari
                </div>
                <div
                    style={{
                        fontSize: 34,
                        opacity: 0.95,
                        maxWidth: 1000,
                        lineHeight: 1.3,
                    }}
                >
                    Sport, cultura e amicizia a Vezzano sul Crostolo (RE).
                </div>
                <div
                    style={{
                        marginTop: 48,
                        fontSize: 26,
                        opacity: 0.85,
                        display: "flex",
                        gap: 32,
                    }}
                >
                    <span>Campeggi a Vaglie</span>
                    <span>•</span>
                    <span>Sagra della Madonna della Neve</span>
                </div>
            </div>
        ),
        {...size},
    );
}
