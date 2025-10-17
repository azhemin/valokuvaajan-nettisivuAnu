import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
<div className="rounded-lg overflow-hidden">
  {/* ...existing code... */}
  <ImageWithFallback
    src="/images/varikuva-naama.jpeg"
    alt="Anu Kiiruna"
    className="w-full h-auto"
  />

</div>

          <div>
            <h2 className="mb-6">Tietoa minusta</h2>
            <p className="mb-6">
              Olen ammattimainen valokuvaaja, joka on erikoistunut muotokuviin, häihin ja
              tapahtumakuvauksiin. Olen toiminut alalla yli 10 vuotta ja olen intohimoinen
              tarinankertojan taidosta kameran takaa.
            </p>
            <p className="mb-8">
              Uskon, että jokainen hetki on ainutlaatuinen ja ansaitsee tulla ikuistetuksi
              kauniisti. Työskentelyni on luonnollista, rentoa ja keskityn aidosti ihmisten
              ja tilanteiden tunnelman vangitsemiseen.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-lg" aria-hidden="true">
                  <Camera className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3>Ammattitaito</h3>
                  <p>Yli 10 vuoden kokemus alalta</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-lg" aria-hidden="true">
                  <Award className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3>Palkitut työt</h3>
                  <p>Useita kansallisia palkintoja</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground rounded-lg" aria-hidden="true">
                  <Heart className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3>Intohimo</h3>
                  <p>Rakastan sitä, mitä teen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
