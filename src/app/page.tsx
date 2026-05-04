"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Award, Coffee, Croissant, Instagram, MessageCircle, Sparkles, Camera, Armchair, Sun, Moon, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Menu",          id: "menu"},
        {
          name: "Gallery",          id: "gallery"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Meet Me Coffee"
      button={{
        text: "Book Now",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "radial-gradient"}}
      title="Meet Me Coffee"
      description="Where Coffee Becomes a Moment"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pretty-young-woman-enjoying-coffee-cup_23-2148756346.jpg",          alt: "Customer portrait smiling coffee cafe"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-cheerful-young-bearded-man-stylish-headwear-having-coffee-sitting-wooden-table-modern-cafe-interior-waiting-his-girlfriend-planning-propose-her-this-sunny-day_273609-1932.jpg",          alt: "Young man working laptop coffee"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-girl-taking-selfie_23-2148225702.jpg",          alt: "Portrait stylish woman drinking coffee"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-caucasian-man-enjoying-free-time-reading-book-while-sitting-outdoors-coffee-shop-lifestyle-concept_58466-11902.jpg",          alt: "Man reading book cafe coffee"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-indoor-photo-smiling-happy-woman-with-dark-hair-looking-window-while-drinking-coffee_291650-134.jpg",          alt: "Close up indoor photo of smiling happy woman"},
      ]}
      buttons={[
        {
          text: "Book Now",          href: "#contact"},
        {
          text: "View Menu",          href: "#menu"},
      ]}
      marqueeItems={[
        {
          type: "text-icon",          text: "Premium Roast",          icon: Coffee,
        },
        {
          type: "text-icon",          text: "Artisan Craft",          icon: Sparkles,
        },
        {
          type: "text-icon",          text: "Cozy Atmosphere",          icon: Coffee,
        },
        {
          type: "text-icon",          text: "Fresh Pastries",          icon: Croissant,
        },
        {
          type: "text-icon",          text: "Elite Service",          icon: Award,
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "The Daily Grind",        "Urban Coffee Reviews",        "City Lifestyle Guide",        "Coffee Connoisseur",        "Modern Cafe Critics",        "Local Brew Experts",        "Atmosphere Weekly"]}
      title="500+ Happy Coffee Lovers"
      description="Experience the premium coffee destination rated 5 stars by our community."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Coffee is more than a drink; it's a bridge."
      description="At Meet Me Coffee, we curate moments of connection. From carefully roasted beans to our hand-crafted interior, every detail invites you to pause, converse, and create memories in the heart of the city."
      subdescription="Quality isn't just a standard; it's our promise."
      icon={Coffee}
      imageSrc="http://img.b2bpic.net/free-photo/barista-preparing-beverage_23-2149458036.jpg"
      mediaAnimation="slide-up"
      imageAlt="Barista making premium coffee"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Espresso",          price: "$4.50",          imageSrc: "http://img.b2bpic.net/free-photo/hot-chocolate_74190-6907.jpg"},
        {
          id: "2",          name: "Signature Latte",          price: "$6.00",          imageSrc: "http://img.b2bpic.net/free-photo/glass-with-iced-coffee-table_23-2148937324.jpg"},
        {
          id: "3",          name: "Cold Brew",          price: "$5.50",          imageSrc: "http://img.b2bpic.net/free-photo/cropped-photo-man-white-shirt-holding-hot-coffee-cup_171337-9996.jpg"},
        {
          id: "4",          name: "Artisan Dessert",          price: "$8.00",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-indian-girl-black-saree-dress-posed-restaurant_627829-1955.jpg"},
        {
          id: "5",          name: "Mocha Velvet",          price: "$6.50",          imageSrc: "http://img.b2bpic.net/free-photo/high-view-lavender-flowers-with-morning-coffee_23-2148337127.jpg"},
        {
          id: "6",          name: "Vanilla Bean Latte",          price: "$6.50",          imageSrc: "http://img.b2bpic.net/free-photo/pancake-chocolate-cake-with-fresh-raspberries-pink-background_127032-3556.jpg"},
      ]}
      title="The Selection"
      description="Carefully crafted flavors for every moment."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "The Espresso Bar",          description: "Our central brewing hub, where excellence is poured.",          imageSrc: "http://img.b2bpic.net/free-photo/barista-working-coffee-machine_107420-96792.jpg",          buttonIcon: Camera,
        },
        {
          title: "Cozy Seating Area",          description: "Relax and unwind in our thoughtfully curated lounge space.",          imageSrc: "http://img.b2bpic.net/free-photo/interior-coffee-shop-with-comfortable-seats_107420-96791.jpg",          buttonIcon: Armchair,
        },
        {
          title: "Morning Sunroom",          description: "Enjoy your morning brew bathed in natural light.",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-interior-morning-sunlight_107420-96790.jpg",          buttonIcon: Sun,
        },
        {
          title: "Artisan Details",          description: "Every corner at Meet Me Coffee is designed for your comfort.",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-counter-details_107420-96793.jpg",          buttonIcon: Moon,
        },
      ]}
      title="Moments in Meet Me"
      description="Visual highlights of our warm atmosphere and high-end experience."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "100%",          title: "Premium Beans",          description: "Ethically sourced quality.",          imageSrc: "http://img.b2bpic.net/free-photo/laugh-is-way-happiness_329181-2893.jpg"},
        {
          id: "m2",          value: "Cinematic",          title: "Atmosphere",          description: "Designed for your moments.",          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-with-chairs_1127-2104.jpg"},
        {
          id: "m3",          value: "Fast",          title: "Service",          description: "Attention without delay.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-roasted-coffee-beans_1149-788.jpg"},
      ]}
      title="Why Meet Me Coffee?"
      description="Excellence in every cup and every corner."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Ready to experience the perfect coffee moment?"
      buttons={[
        {
          text: "Visit Us Today",          href: "#"},
        {
          text: "Book a Table",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Meet Me Coffee &bull; 100 Main St, Anytown"
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com",          ariaLabel: "Instagram"},
        {
          icon: MessageCircle,
          href: "https://wa.me",          ariaLabel: "WhatsApp"},
        {
          icon: MapPin,
          href: "https://maps.app.goo.gl/UhVjTimPerZoUZ9E8",          ariaLabel: "Location"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}