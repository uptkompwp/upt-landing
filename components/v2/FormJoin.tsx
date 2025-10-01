"use client"
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FormJoin() {
    type JoinForm = {
        nim: string;
        nama: string;
        kelas: string;
        nowa: string;
        alamat: string;
    };

    const form = useForm<JoinForm>({
        defaultValues: {
            nim: "",
            nama: "",
            kelas: "",
            nowa: "",
            alamat: "",
        },
    });

    const onSubmit = (data: JoinForm) => {
        const message = `Hai kak, saya ingin mendaftar sebagai bagian dari UPT Laboratorium.
Berikut data-data yang saya lampirkan :
1. NIM : ${data.nim}
2. Nama Lengkap : ${data.nama}
3. Kode Kelas : ${data.kelas}
4. No WA : ${data.nowa}
5. Alamat : ${data.alamat}`;

        const url = `https://wa.me/6282325353010?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        form.reset();

    };
    return (
        <div className="text-white p-6 shadow-lg w-full border border-white/10 bg-white/5 backdrop-blur-md rounded-xl">
            <h2 className="uppercase font-extrabold text-white tracking-wider text-2xl mb-5">
                Join us now
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="nim"
                        rules={{ required: "NIM wajib diisi" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Nomer Induk Mahasiswa</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukan NIM"
                                        {...field}
                                        className="bg-white/10 border border-white/20 backdrop-blur-md 
                                 text-white placeholder:text-gray-300 rounded-xl 
                                 focus:ring-2 focus:ring-[#00ffff] focus:border-[#00ffff]
                                 transition-all duration-200"
                                    />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="nama"
                        rules={{ required: "Nama wajib diisi" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Nama Lengkap</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukan Nama Lengkap"
                                        {...field}
                                        className="bg-white/10 border border-white/20 backdrop-blur-md 
                                 text-white placeholder:text-gray-300 rounded-xl 
                                 focus:ring-2 focus:ring-[#00ffff] focus:border-[#00ffff]
                                 transition-all duration-200"
                                    />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="kelas"
                        rules={{ required: "Kode Kelas wajib diisi" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Kode Kelas</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukan Kode Kelas"
                                        {...field}
                                        className="bg-white/10 border border-white/20 backdrop-blur-md 
                                 text-white placeholder:text-gray-300 rounded-xl 
                                 focus:ring-2 focus:ring-[#00ffff] focus:border-[#00ffff]
                                 transition-all duration-200"
                                    />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="nowa"
                        rules={{ required: "No WA wajib diisi" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">No WhatsApp</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Masukan Nomer WhatsApp"
                                        {...field}
                                        className="bg-white/10 border border-white/20 backdrop-blur-md 
                                 text-white placeholder:text-gray-300 rounded-xl 
                                 focus:ring-2 focus:ring-[#00ffff] focus:border-[#00ffff]
                                 transition-all duration-200"
                                    />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="alamat"
                        rules={{ required: "Alamat wajib diisi" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Alamat</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukan Alamat"
                                        {...field}
                                        className="bg-white/10 border border-white/20 backdrop-blur-md 
                                 text-white placeholder:text-gray-300 rounded-xl 
                                 focus:ring-2 focus:ring-[#00ffff] focus:border-[#00ffff]
                                 transition-all duration-200"
                                    />
                                </FormControl>
                                <FormMessage className="text-pink-400" />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full py-6 text-lg font-semibold 
                         bg-white/10 border border-white/20 backdrop-blur-md
                         text-white rounded-xl shadow-lg 
                         hover:bg-white/20 hover:shadow-[#00ffff]/40
                         transition-all duration-300"
                    >
                        JOIN NOW
                    </Button>
                </form>
            </Form>
        </div>
    )
}
