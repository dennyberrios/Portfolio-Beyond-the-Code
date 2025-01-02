import { InputDemo } from "../Input";
import { TextareaDemo } from "../Textarea";
import { Button } from "../ui/button";

const FormContact = () => {
    return (
        <form className="lg:w-[600px] max-lg:w-[500px] max-sm:w-11/12 py-10">
            <div>
                <InputDemo
                    placeholder="Seu nome"
                    type="text"
                    label="Nome"
                    colorLabel="text-light-bg"
                    className="bg-deep-slate border-none w-full py-6 px-3 text-light-grey text-lg focus:outline-none"
                    style={{fontSize: "1rem"}}
                    required={true}
                />
            </div>
            <div>
                <InputDemo
                    placeholder="Seu E-email"
                    type="email"
                    label="E-mail"
                    colorLabel="text-light-bg"
                    className="bg-deep-slate border-none w-full py-6 px-3 text-light-grey"
                    style={{fontSize: "1rem"}}
                    required={true}
                />
            </div>
            <div>
                <TextareaDemo
                    placeholder="Sua mensagem aqui..."
                    label="Mensagem"
                    colorLabel="text-light-bg"
                    className="bg-deep-slate resize-none border-none w-full h-32 text-light-grey"
                    style={{fontSize: "1rem"}}
                    required={true}
                />
            </div>
            <div>
                <Button className="w-full my-7 bg-dodger-blue hover:bg-lime-green font-bold text-md transform duration-300 ease-in-out" type="submit">
                    Enviar
                </Button>
            </div>
        </form>
    );
}

export default FormContact;