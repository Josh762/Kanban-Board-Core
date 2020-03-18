class Controller {

    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.getByKey = this.getByKey.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        return res.status(200).send(await this.service.getAll(req.query));
    }

    async getByKey(req, res) {
        const { id } = req.params;
        // let response = await this.service.getByKey(id);

        return res.status(200).send(await this.service.getByKey(id));
    }

    async insert(req, res) {
        console.log("hmmmm**",req);

        let response = await this.service.insert(req.body);
        console.log("*****",response);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(201).send(response);
    }

    async update(req, res) {
        const { id } = req.params;

        let response = await this.service.update(id, req.body);

        return res.status(response.statusCode).send(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        let response = await this.service.delete(id);

        return res.status(response.statusCode).send(response);
    }

}

export default Controller;