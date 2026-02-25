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
                        Google&apos;da Zirveyi Hedefleyin
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sadece söz vermiyoruz, sonuç odaklı çalışıyoruz. Doğru SEO stratejileri ile organik trafiğinizi nasıl artırdığımızı Google Search Console verilerimizle kendi gözlerinizle görün.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image 1 Container */}
                    <div
                        className="group relative rounded-2xl overflow-hidden border border-border shadow-sm cursor-pointer"
                        onClick={() => setSelectedImage("/images/konya-seo-1.png")}
                    >
                        <Image
                            src="/images/konya-seo-1.png"
                            alt="Konya SEO Ajansı Google Search Console Organik Trafik Artışı"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="text-white w-10 h-10" />
                        </div>
                    </div>

                    {/* Image 2 Container */}
                    <div
                        className="group relative rounded-2xl overflow-hidden border border-border shadow-sm cursor-pointer"
                        onClick={() => setSelectedImage("/images/konya-seo-2.png")}
                    >
                        <Image
                            src="/images/konya-seo-2.png"
                            alt="Konya Yerel SEO Tıklanma ve Gösterim İstatistikleri"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="text-white w-10 h-10" />
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
