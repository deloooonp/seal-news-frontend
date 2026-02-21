import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { COMMENTS_MOCK } from "@/constants/comments";
import Button from "@/components/ui/Button";

export default function Comments() {
  return (
    <section className="flex flex-col gap-10 mt-10">
      <div className="flex items-center gap-4">
        <div className="bg-primary w-1 h-8 rounded-xl"></div>
        <h2 className="text-section-title">Komentar</h2>
      </div>

      <div className="flex gap-4">
        <Image
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Current User"
          width={64}
          height={64}
          className="h-14 w-14 rounded-lg object-cover"
        />
        <div className="flex-1 flex flex-col gap-4">
          <div className="relative">
            <textarea
              placeholder="Apa yang ingin anda tanyakan?"
              className="w-full h-40 p-6 border border-stroke rounded-xl outline-none focus:border-primary transition-colors resize-none text-body"
            ></textarea>
            <span className="absolute bottom-4 right-4 text-secondary-text text-body-sm">
              0/50
            </span>
          </div>
          <Button>Kirim</Button>
        </div>
      </div>

      <div className="h-px bg-stroke/50 w-full mt-10"></div>

      <div className="flex flex-col gap-10">
        {COMMENTS_MOCK.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Image
                src={comment.avatar}
                alt={comment.user}
                width={64}
                height={64}
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-primary-text text-body-sm uppercase">
                    {comment.user}
                  </span>
                  <span className="text-secondary-text text-body-sm">
                    • {comment.date}
                  </span>
                </div>
                <p className="text-primary-text text-body">{comment.content}</p>
                <button className="text-primary text-body-md w-fit hover:underline cursor-pointer">
                  Balas
                </button>

                {comment.replies && (
                  <div className="flex flex-col gap-8 mt-6">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <Image
                          src={reply.avatar}
                          alt={reply.user}
                          width={64}
                          height={64}
                          className="h-14 w-14 rounded-lg object-cover"
                        />
                        <div className="flex-1 flex flex-col gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-primary-text text-body-sm uppercase">
                              {reply.user}
                            </span>
                            <span className="text-secondary-text text-body-sm">
                              • {reply.date}
                            </span>
                          </div>
                          <p className="text-primary-text text-body">
                            {reply.content}
                          </p>
                          <button className="text-primary text-body-md w-fit hover:underline cursor-pointer">
                            Balas
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="h-px bg-stroke/50 w-full"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center text-secondary-text text-body-md pt-5 mb-20">
        <div className="flex items-center gap-4">
          <span>Item per page</span>
          <div className="relative">
            <select className="appearance-none bg-transparent border-b border-stroke pr-6 py-1 outline-none cursor-pointer">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
          <span>of 200</span>
        </div>
        <div className="flex items-center gap-8">
          <ChevronLeft className="cursor-pointer hover:text-primary transition-colors" />
          <div className="flex items-center gap-6">
            <span className="text-primary font-bold cursor-pointer">1</span>
            <span className="cursor-pointer hover:text-primary transition-colors">
              2
            </span>
          </div>
          <ChevronRight className="cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </section>
  );
}
