import React, { useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {BsEar, BsPhone, BsTruck} from "react-icons/bs"
import {PiSyringe} from "react-icons/pi"
import {LiaWeightSolid} from "react-icons/lia"
import {GiCorkedTube, GiMedicalDrip, GiScalpel} from "react-icons/gi"
import {FaHandHoldingMedical} from "react-icons/fa"
import {MdOutlineChildCare} from "react-icons/md"




import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import logo from '../assets/img/logo.png';
import ButtonOut from './ButtonOut';
import { Fragment } from 'react';


const products = [
  { name: 'Otorrinolaringologia', description: 'Conecta con nosotros ya mismo', href: '#services', icon: BsEar },
  { name: 'Sueros Vitaminados', description: 'Échale un vistazo a como podemos ayudarte', href: '#services', icon: GiMedicalDrip },
  { name: 'Programa de Perdida de Peso', description: 'Mantente informado con nosotros', href: '#services', icon: LiaWeightSolid },
  { name: 'Laboratorios', description: 'Conece un poco más sobre nosotros', href: '#services', icon: GiCorkedTube },
  { name: 'Telemedicina', description: 'Ten tu consulta desde casa', href: '#services', icon: BsPhone },
  { name: 'DOT', description: 'Conece un poco más sobre nosotros', href: '#services', icon: BsTruck },
  { name: 'Medicina General', description: 'Conece un poco más sobre nosotros', href: '#services', icon: FaHandHoldingMedical},
  { name: 'Vacunación', description: 'Conece un poco más sobre nosotros', href: '#services', icon: PiSyringe },
  { name: 'Cirugía Menor', description: 'Conece un poco más sobre nosotros', href: '#services', icon: GiScalpel },
  { name: 'Pediatría', description: 'Conece un poco más sobre nosotros', href: '#services', icon: MdOutlineChildCare },
  { name: 'Muchos más ', description: 'Conece un poco más sobre nosotros', href: '#services', icon: SquaresPlusIcon },
];
const callsToAction = [
  { name: 'Haz una cita', href: 'https://provider.kareo.com/madelin-perez-antela', icon: PlayCircleIcon },
  { name: 'Llámanos', href: 'tel:+14695864574', icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para cerrar el menú móvil
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
            <span className="sr-only">Clinica Familiar La Buena Fe</span>
            <img className="h-20 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-darkblue">
              Servicios Principales
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-cyan-50 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-cyan-100"
                    >
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-cyan-100 group-hover:bg-cyan-50">
                        <item.icon className="h-5 w-5 text-lightblue group-hover:text-darkblue" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-darkblue" onClick={closeMobileMenu}>
                          {item.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-darkblue hover:bg-cyan-50"
                      onClick={closeMobileMenu}
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#insurances" className="text-sm font-semibold leading-6 text-darkblue" onClick={closeMobileMenu}>
            Seguros
          </a>
          <a href="#telemedicina" className="text-sm font-semibold leading-6 text-darkblue" onClick={closeMobileMenu}>
            Telemedicina
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-darkblue" onClick={closeMobileMenu}>
            Nosotros
          </a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-darkblue" onClick={closeMobileMenu}>
            Contáctanos
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonOut text='Haz una cita' url='https://provider.kareo.com/madelin-perez-antela' onClick={closeMobileMenu} />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
              <span className="sr-only">Clinica Familiar La Buena Fe</span>
              <img className="h-16" src={logo} alt="CLinica Logo" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={closeMobileMenu}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-darkblue hover:bg-gray-50">
                        Servicios
                        <ChevronDownIcon className={open ? 'rotate-180 h-5 w-5 flex-none' : 'h-5 w-5 flex-none'} aria-hidden="true" />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <a key={item.name} href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-darkblue hover:bg-gray-50" onClick={closeMobileMenu}>
                            {item.name}
                          </a>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a href="#insurances" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkblue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Seguros
                </a>
                <a href="#telemedicina" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkblue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Telemedicina
                </a>
                <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkblue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Nosotros
                </a>
                <a href="#contacto" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkblue hover:bg-gray-50" onClick={closeMobileMenu}>
                  Contáctanos
                </a>
              </div>
              <div className="py-6">
                <ButtonOut text='Haz una cita' url='https://provider.kareo.com/madelin-perez-antela' onClick={closeMobileMenu} />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
