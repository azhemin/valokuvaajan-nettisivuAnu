import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Users, Heart, Building, Briefcase, Baby, Camera } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Häät",
    description: "Häiden kuvaus kokonaisvaltaisella palvelulla. Ikuistan kaiken valmistelusta juhlintaan.",
    price: "Alk. 1500€"
  },
  {
    icon: Users,
    title: "Perhekuvaus",
    description: "Luonnollisia ja lämminhenkisiä perhekuvia, jotka kertovat perheen tarinan.",
    price: "Alk. 300€"
  },
  {
    icon: Baby,
    title: "Vastasyntyneen kuvaus",
    description: "Herkät ja tunnelmalliset kuvat elämän ensimmäisistä hetkistä.",
    price: "Alk. 350€"
  },
  {
    icon: Camera,
    title: "Muotokuvat",
    description: "Yksilöllisiä muotokuvia studiossa tai luonnossa. Myös CV-kuvat.",
    price: "Alk. 250€"
  },
  {
    icon: Building,
    title: "Yritykset",
    description: "Yritys- ja yrittäjäkuvaus, tilojen kuvaus ja markkinointikuvat.",
    price: "Alk. 400€"
  },
  {
    icon: Briefcase,
    title: "Tapahtumat",
    description: "Tapahtumien ja yritysjuhlien kattava kuvauspalvelu.",
    price: "Alk. 500€"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-4">Palvelut</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tarjoan monipuolisia valokuvauspalveluita eri tarpeisiin. Kaikki paketit ovat 
          räätälöitävissä toiveidesi mukaan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-primary">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Tarvitsetko jotain muuta? Ota yhteyttä, niin räätälöidään sinulle sopiva paketti!
          </p>
        </div>
      </div>
    </section>
  );
}
