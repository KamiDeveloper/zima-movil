import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode } from 'swiper/modules'
import { useState, useRef } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

const MediaCarousel = ({ images = [], video = null, productName = "Producto" }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const videoRef = useRef(null)

    // Construir array de medios (imágenes + video)
    const mediaItems = []

    // Agregar imágenes si existen
    if (images && images.length > 0) {
        images.forEach((img, index) => {
            mediaItems.push({ type: 'image', src: img, id: `img-${index}` })
        })
    }

    // Agregar video al final si existe
    if (video) {
        mediaItems.push({ type: 'video', src: video, id: 'video' })
    }

    // Si no hay ni imágenes ni video, mostrar mensaje
    if (mediaItems.length === 0) {
        return (
            <div
                className="aspect-square rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: `rgb(var(--muted))` }}
            >
                <div className="text-center px-8">
                    <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: `rgb(var(--muted-foreground))` }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <p
                        className="text-lg font-medium"
                        style={{ color: `rgb(var(--muted-foreground))` }}
                    >
                        Sin imágenes o video disponibles
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {/* Carrusel Principal */}
            <div className="relative">
                <Swiper
                    modules={[Navigation, Thumbs, FreeMode]}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="rounded-3xl overflow-hidden aspect-square"
                    style={{ backgroundColor: `rgb(var(--muted))` }}
                >
                    {mediaItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-full h-full flex items-center justify-center">
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={productName}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <video
                                        ref={videoRef}
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        controls
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botones de navegación personalizados */}
                {mediaItems.length > 1 && (
                    <>
                        <button
                            className="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{
                                backgroundColor: `rgb(var(--card))`,
                                border: `2px solid rgb(var(--border))`,
                                color: `rgb(var(--foreground))`
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{
                                backgroundColor: `rgb(var(--card))`,
                                border: `2px solid rgb(var(--border))`,
                                color: `rgb(var(--foreground))`
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails (solo si hay más de 1 elemento) */}
            {mediaItems.length > 1 && (
                <Swiper
                    modules={[FreeMode, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={12}
                    slidesPerView={'auto'}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className="thumbs-swiper"
                >
                    {mediaItems.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="!w-20 !h-20 cursor-pointer"
                        >
                            <div
                                className="w-full h-full rounded-lg overflow-hidden transition-all duration-300 hover:ring-2"
                                style={{
                                    backgroundColor: `rgb(var(--muted))`,
                                    border: `2px solid rgb(var(--border))`
                                }}
                            >
                                {item.type === 'image' ? (
                                    <img
                                        src={item.src}
                                        alt={`${productName} thumbnail`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ color: `rgb(var(--muted-foreground))` }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* Estilos adicionales inline para Swiper */}
            <style jsx>{`
                .thumbs-swiper .swiper-slide-thumb-active > div {
                    ring: 2px;
                    ring-color: rgb(var(--primary));
                    border-color: rgb(var(--primary));
                }
            `}</style>
        </div>
    )
}

export default MediaCarousel
