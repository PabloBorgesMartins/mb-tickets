import { createServer, Model } from 'miragejs'

export function startServer() {
    createServer({
        models: {
            festivity: Model
        },
        // trackRequests: false,

        seeds(server) {
            server.db.loadData({
                festivities: [
                    {
                        id: 1,
                        title: "Cidade junina",
                        description: "A cidade cresceu e agora somos um complexo completo de entretenimento. Para essa nova edição, a Cidade Junina está aberta com as delícias típicas dessa época tão gostosa! De pescaria a roda gigante, de quadrilha a grandes espetáculos, tem espaço pra toda a família no Mirante Beagá durante os meses de junho e julho!",
                        amount: 30,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhhl6zmpdM3IGy9nIjDT80mZEiPXwaOtXsw&usqp=CAU",
                        date: new Date(),
                        state: "MG",
                        city: "Poços de Caldas",
                        district: "Vila Cruz",
                        street: "Avenida João Pinheiro",
                        number: 3090,
                        userId: 5,
                        createdAt: new Date()
                    },
                    {
                        id: 2,
                        title: "Forrorock Aprecie",
                        description: "Eita que essa festança vai ser boa por demais da conta! Nóis trupica, mas não cai e nesse FORROCK nóis manda é  bem demais! É APRECIE, miséra! Dois dias de festança e nóis tão é chic no úrtimo! Bora levantar a poeira nesse arrasta-pé!",
                        amount: 20,
                        image: "https://img.static-kl.com/images/media/E95E1F32-A7A4-4FC0-AC0A41A2BC528AE3?aspect_ratio=1:1&min_width=912",
                        date: new Date(),
                        state: "SP",
                        city: "São Paulo",
                        district: "Centro",
                        street: "Avenida Paulista",
                        number: 400,
                        userId: 4,
                        createdAt: new Date()
                    }, {
                        id: 3,
                        title: "Patati Patata Circo Show",
                        description: "A ALEGRIA ESTÁ DE VOLTA! PATATI PATATÁ REESTREIA CIRCO EM SÃO PAULO SEGUINDO TODOS OS PROTOCOLOS DE SEGURANÇA E DISTANCIAMENTO,",
                        amount: 50,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUPnOca6vd8289UUlRH4FhehsKsiYvviRGw&usqp=CAU",
                        date: new Date(),
                        state: "MG",
                        city: "Poços de Caldas",
                        district: "Centro",
                        street: "Rua Assis Figueiredo",
                        number: 200,
                        userId: 4,
                        createdAt: new Date()
                    }
                ],
            });
        },

        routes() {
            this.timing = 2000;

            // this.get("/festivities/:title");

            this.get('/festivities', () => {
                return this.schema.all('festivity');
            });

            this.get("/festivities/:id");

            this.post('/festivities', (schema, request) => {
                const data = JSON.parse(request.requestBody);
                return schema.create('festivity', data);
            });
        }
    });
}
