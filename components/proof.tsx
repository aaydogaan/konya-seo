"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

export function ProofSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section className="py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Vaka Analizleri ve Başarı Hikayeleri
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sadece söz vermiyoruz, verilerle konuşuyoruz. Ajansımızın uyguladığı SEO stratejileriyle Konya ve genel Türkiye aramalarında organik trafiklerini nasıl milyonlara ulaştırdığını kendi gözlerinizle inceleyin.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-stretch">
                    {/* Case Study 1 */}
                    <div className="flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all hover:shadow-md hover:border-accent/40">
                        <div
                            className="group relative cursor-pointer overflow-hidden border-b border-border bg-slate-100"
                            onClick={() => setSelectedImage("/images/konya-seo-1.png")}
                        >
                            <Image
                                src="/images/konya-seo-1.png"
                                alt="Ya Olmasaydı (yaolmasaydi.com) SEO Başarı Grafiği"
                                width={800}
                                height={400}
                                className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white w-10 h-10" />
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">Proje: Ya Olmasaydı</h3>
                            <a href="https://yaolmasaydi.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm mb-6 inline-block">yaolmasaydi.com</a>

                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Toplam Tıklama</p>
                                    <p className="text-xl font-bold text-foreground">12.6 B+</p>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Toplam Gösterim</p>
                                    <p className="text-xl font-bold text-foreground">1.2 Mn+</p>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Ortalama TO</p>
                                    <p className="text-xl font-bold text-foreground">% 1.1</p>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Ortalama Konum</p>
                                    <p className="text-xl font-bold text-foreground">6.4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div className="flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm transition-all hover:shadow-md hover:border-accent/40">
                        <div
                            className="group relative cursor-pointer overflow-hidden border-b border-border bg-slate-100"
                            onClick={() => setSelectedImage("/images/konya-seo-2.png")}
                        >
                            <Image
                                src="/images/konya-seo-2.png"
                                alt="Rastgel (rastgel.com) SEO Başarı Grafiği"
                                width={800}
                                height={400}
                                className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white w-10 h-10" />
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2">Proje: Rastgel</h3>
                            <a href="https://rastgel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm mb-6 inline-block">rastgel.com</a>

                            <div className="grid grid-cols-2 gap-4 mt-auto">
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Son 6 Ay Tıklama</p>
                                    <p className="text-xl font-bold text-foreground">1.84 B+</p>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Son 6 Ay Gösterim</p>
                                    <p className="text-xl font-bold text-foreground">43.4 B+</p>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Ortalama TO</p>
                                    <p className="text-xl font-bold text-foreground">% 4.2</p>
                                </div>
                                <div className="p-4 rounded-xl border border-border bg-muted/5">
                                    <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.1em] font-bold">Ortalama Konum</p>
                                    <p className="text-xl font-bold text-foreground">6.1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Büyütülmüş Google Search Console Sonucu"
                            width={1600}
                            height={1000}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
