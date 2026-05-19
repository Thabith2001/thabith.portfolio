'use client';

import { CheckCircle, XCircle, X } from 'lucide-react';

type Props = {
    open: boolean;
    success: boolean;
    onClose: () => void;
};

const MailStatusModal = ({
                             open,
                             success,
                             onClose,
                         }: Props) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">

            {/* Modal */}
            <div className="
                relative
                w-full
                max-w-md
                rounded-3xl
                border border-white/10
                bg-[#111111]
                p-8
                shadow-2xl
                animate-in fade-in zoom-in duration-300
            ">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="
                        absolute top-4 right-4
                        text-[#a3a39d] hover:text-white
                        transition
                    "
                >
                    <X size={20} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div
                        className={`
                            w-20 h-20 rounded-full
                            flex items-center justify-center
                            border
                            ${
                            success
                                ? 'bg-green-400/10 border-green-400/30 text-green-400'
                                : 'bg-red-400/10 border-red-400/30 text-red-400'
                        }
                        `}
                    >
                        {success ? (
                            <CheckCircle size={42} />
                        ) : (
                            <XCircle size={42} />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-3">
                        {success
                            ? 'Message Sent'
                            : 'Sending Failed'}
                    </h2>

                    <p className="text-[#a3a39d] leading-relaxed text-sm">
                        {success
                            ? 'Your message has been successfully delivered. I will get back to you as soon as possible.'
                            : 'Something went wrong while sending your message. Please try again later.'}
                    </p>
                </div>

                {/* Button */}
                <button
                    onClick={onClose}
                    className={`
                        mt-8 w-full py-4 rounded-2xl
                        font-semibold transition duration-300
                        ${
                        success
                            ? 'bg-green-400 text-black hover:bg-green-300'
                            : 'bg-red-500 text-white hover:bg-red-400'
                    }
                    `}
                >
                    {success ? 'Awesome' : 'Try Again'}
                </button>
            </div>
        </div>
    );
};

export default MailStatusModal;