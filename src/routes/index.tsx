import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowDown, Signal, Wifi, BatteryFull, Search, Map as MapIcon, Phone, MessageSquare, CheckCircle2, Star, Package, CreditCard, AlertTriangle, MapPin, FileText, PenLine, Camera, Clock, Tag, Upload } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HOUSIZY — Medium-Fidelity Wireframes" },
      { name: "description", content: "Medium-fidelity wireframes covering all HOUSIZY screens across 5 apps." },
    ],
  }),
  component: WireframeHub,
});

/* ---------- Wireframe primitives (monochrome HD) ---------- */
function PhoneFrame({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{title}</div>
        {subtitle && <div className="text-sm font-semibold text-foreground">{subtitle}</div>}
      </div>
      <div className="w-[420px] h-[860px] rounded-[52px] border-[3px] border-neutral-800 bg-white shadow-md overflow-hidden relative">
        <div className="h-9 bg-white flex items-center justify-between px-7 text-[12px] font-mono text-neutral-700 border-b border-dashed border-neutral-300 relative">
          <span>9:41</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-2 w-20 h-5 border border-neutral-800 rounded-full" />
          <span className="flex items-center gap-1.5"><Signal className="w-4 h-4" /><Wifi className="w-4 h-4" /><BatteryFull className="w-5 h-5" /></span>
        </div>
        <div className="h-[calc(100%-36px)] overflow-y-auto p-4 text-[13px] leading-snug bg-white text-neutral-800">{children}</div>
      </div>
    </div>
  );
}

function DesktopFrame({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="mb-2">
        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{title}</div>
        {subtitle && <div className="text-sm font-semibold text-foreground">{subtitle}</div>}
      </div>
      <div className="w-[860px] h-[600px] rounded-md border-[2px] border-neutral-800 bg-white shadow-md overflow-hidden">
        <div className="h-8 bg-white flex items-center gap-2 px-4 border-b border-dashed border-neutral-300">
          <span className="w-2.5 h-2.5 rounded-full border border-neutral-500" />
          <span className="w-2.5 h-2.5 rounded-full border border-neutral-500" />
          <span className="w-2.5 h-2.5 rounded-full border border-neutral-500" />
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-0.5 border border-dashed border-neutral-400 rounded text-[11px] text-neutral-500 font-mono">housizy.app</div>
          </div>
        </div>
        <div className="h-[calc(100%-32px)] overflow-y-auto text-[12px] bg-white text-neutral-800">{children}</div>
      </div>
    </div>
  );
}

const Box = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`border border-dashed border-neutral-400 bg-white rounded p-2 ${className}`}>{children}</div>
);
const Bar = ({ w = "100%", h = 8 }: { w?: string; h?: number }) => (
  <div className="bg-neutral-300 rounded-sm" style={{ width: w, height: h }} />
);
const Pill = ({ children }: { children: React.ReactNode; tone?: string }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border border-neutral-500 bg-neutral-100 text-neutral-700">{children}</span>
);
const Btn = ({ children, primary }: { children: React.ReactNode; primary?: boolean }) => (
  <div className={`text-center py-2 rounded font-semibold text-[11px] border ${primary ? "border-neutral-800 bg-neutral-800 text-white" : "border-neutral-500 bg-white text-neutral-800 border-dashed"}`}>{children}</div>
);
const Row = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex gap-2 ${className}`}>{children}</div>
);

/* ---------- CUSTOMER MOBILE ---------- */
const customerScreens = [
  {
    id: "c01", title: "OTP Login", body: (
      <div className="space-y-3 pt-6">
        <div className="text-center font-bold text-base">Welcome to HOUSIZY</div>
        <div className="text-center text-muted-foreground">India's #1 construction material delivery</div>
        <Box className="mt-6"><div className="text-[10px] text-muted-foreground">Mobile number</div><div className="font-mono">+91 _________</div></Box>
        <Box><div className="text-[10px] text-muted-foreground">Your name (optional)</div></Box>
        <Btn primary>Send OTP</Btn>
        <div className="text-[9px] text-center text-muted-foreground">By continuing you agree to Terms & Privacy</div>
      </div>
    )
  },
  {
    id: "c02", title: "Onboarding · Profile & Sites", body: (
      <div className="space-y-2">
        <div className="font-bold">Set up your account</div>
        <div className="text-muted-foreground">Step 1 of 3 · Your profile</div>
        <div className="mt-3 font-medium">I am a</div>
        <Row><Pill tone="accent">Contractor</Pill><Pill>Builder</Pill><Pill>Homeowner</Pill><Pill>Architect</Pill></Row>
        <div className="mt-2 font-medium">Company</div><Box>ACME Constructions Pvt Ltd</Box>
        <div className="font-medium">GSTIN</div><Box>29ABCDE1234F1Z5</Box>
        <div className="font-medium">Sites</div>
        <Box>Site B-12 · Whitefield · 560066</Box>
        <Box>Site A-04 · Hebbal · 560024</Box>
        <Btn>+ Add site</Btn>
        <div className="font-medium">Team</div><Box>3 members invited</Box>
        <div className="font-medium">Credit line</div><Box>Net-30 · request ₹5L limit</Box>
        <Btn primary>Continue</Btn>
      </div>
    )
  },
  {
    id: "c03", title: "Home Feed", body: (
      <div className="space-y-2">
        <div className="flex justify-between"><div><div className="text-[9px] text-muted-foreground">Delivering to</div><div className="font-semibold">Site B-12 • Whitefield</div></div><Pill tone="accent">Credit</Pill></div>
        <Box className="bg-muted"><div className="font-mono text-muted-foreground"><Search className="inline w-3 h-3 mr-1"/> Search cement, steel, bricks…</div></Box>
        <Box className="bg-accent/30"><div className="font-bold">Bulk Saver · 18% off</div><div>50+ cement bags</div><Btn primary>Order now</Btn></Box>
        <div className="font-semibold">Shop by category</div>
        <div className="grid grid-cols-3 gap-1">{["Cement","Steel","Bricks","Sand","Paint","Tiles"].map(c=> <Box key={c} className="text-center"><div className="h-8 bg-muted rounded mb-1"/>{c}</Box>)}</div>
        <div className="font-semibold">Trending</div>
        <Box><Bar w="60%"/><div className="mt-1 text-[10px]">UltraTech PPC · ₹385/bag</div></Box>
      </div>
    )
  },
  {
    id: "c04", title: "Category / Search Results", body: (
      <div className="space-y-2">
        <Box className="bg-muted"><Search className="inline w-3 h-3 mr-1"/> "cement"</Box>
        <Row><Pill tone="accent">Pincode 560066 ✓</Pill><Pill>Sort ▾</Pill><Pill>Filter ▾</Pill></Row>
        {[1,2,3,4].map(i=> (
          <Box key={i}><Row><div className="w-10 h-10 bg-muted rounded"/><div className="flex-1"><div className="font-medium">UltraTech PPC 50kg</div><div className="text-muted-foreground">In stock · Whitefield Hub</div><div className="font-bold">₹385 <span className="line-through text-muted-foreground font-normal">₹420</span></div></div><Pill tone="success">Add</Pill></Row></Box>
        ))}
      </div>
    )
  },
  {
    id: "c05", title: "Product Detail", body: (
      <div className="space-y-2">
        <div className="h-28 bg-muted rounded"/>
        <div className="font-bold">UltraTech PPC Cement 50kg</div>
        <Row><Pill tone="success">In stock</Pill><Pill>ISI certified</Pill></Row>
        <div className="font-bold text-base">₹385 <span className="text-muted-foreground text-[10px]">+GST 28%</span></div>
        <Box><div className="text-[10px] text-muted-foreground">Delivery</div>60-minute Express to 560066</Box>
        <Box><div className="text-[10px] text-muted-foreground">Tag to project</div>Site B-12 ▾</Box>
        <Box><div className="font-medium">Bulk pricing</div>50+ bags · ₹345/bag<br/>100+ bags · ₹325/bag</Box>
        <Row><Btn>−  3  +</Btn><div className="flex-1"><Btn primary>Add to cart</Btn></div></Row>
      </div>
    )
  },
  {
    id: "c06", title: "Cart (project-tagged)", body: (
      <div className="space-y-2">
        <div className="font-bold">Cart · 3 items</div>
        <Box><div className="flex justify-between"><div>UltraTech PPC × 50</div><div>₹17,250</div></div><Pill tone="accent">Site B-12</Pill></Box>
        <Box><div className="flex justify-between"><div>TMT 12mm × 20</div><div>₹19,400</div></div><Pill tone="accent">Site B-12</Pill></Box>
        <Box><div className="flex justify-between"><div>River sand 1T</div><div>₹2,800</div></div><Pill>Site A-04</Pill></Box>
        <Box><div className="flex justify-between"><span>Subtotal</span><span>₹39,450</span></div><div className="flex justify-between"><span>GST</span><span>₹7,101</span></div><div className="flex justify-between font-bold"><span>Total</span><span>₹46,551</span></div></Box>
        <Btn primary>Proceed to checkout</Btn>
      </div>
    )
  },
  {
    id: "c07", title: "Checkout & Payment", body: (
      <div className="space-y-2">
        <div className="font-bold">Checkout</div>
        <Box><div className="text-[10px] text-muted-foreground">Deliver to</div>Site B-12 · Whitefield 560066</Box>
        <Box><div className="text-[10px] text-muted-foreground">Slot</div>Express · within 60 min</Box>
        <div className="font-medium">Payment</div>
        <Box className="border-foreground"><Row><Pill tone="accent">●</Pill>HOUSIZY Credit (Net-30) · ₹3.2L available</Row></Box>
        <Box>○ UPI</Box>
        <Box>○ Cash on Delivery</Box>
        <Box><div className="text-[10px] text-muted-foreground">PO number (optional)</div>PO-2026-441</Box>
        <Btn primary>Place order · ₹46,551</Btn>
      </div>
    )
  },
  {
    id: "c08", title: "Order Tracking (6-step)", body: (
      <div className="space-y-2">
        <div className="font-bold">Order #HZ-88421</div>
        <div className="h-28 bg-muted rounded flex items-center justify-center text-muted-foreground"><MapIcon className="inline w-3 h-3 mr-1"/> Live map · Driver Ravi</div>
        <div className="space-y-1">
          {["Accepted","Picking","Packed","Dispatched","Arriving","Delivered"].map((s,i)=> (
            <Row key={s}><div className={`w-4 h-4 rounded-full ${i<4?"bg-green-500":"bg-muted border"}`}/>{s}{i===3 && <Pill tone="accent">now</Pill>}</Row>
          ))}
        </div>
        <Row><Btn><Phone className="inline w-3 h-3 mr-1"/> Call driver</Btn><Btn><MessageSquare className="inline w-3 h-3 mr-1"/> WhatsApp</Btn></Row>
        <div className="text-[10px] text-muted-foreground text-center">ETA 10:58 · SLA 60 min</div>
      </div>
    )
  },
  {
    id: "c09", title: "Delivered + Invoice", body: (
      <div className="space-y-2">
        <div className="text-center text-3xl"><CheckCircle2 className="inline w-4 h-4 mr-1"/></div>
        <div className="text-center font-bold">Delivered at 10:58</div>
        <div className="text-center text-muted-foreground">2 min under SLA</div>
        <Box><div className="font-medium">GST Invoice INV-88421</div><Bar w="80%"/><Bar w="60%"/><Bar w="40%"/><Btn>Download PDF</Btn></Box>
        <div className="font-medium">Rate your delivery</div>
        <Row><span><Star className="inline w-3 h-3 fill-current"/><Star className="inline w-3 h-3 fill-current"/><Star className="inline w-3 h-3 fill-current"/><Star className="inline w-3 h-3 fill-current"/><Star className="inline w-3 h-3 fill-current"/></span></Row>
        <Btn primary>One-tap Reorder</Btn>
      </div>
    )
  },
  {
    id: "c10", title: "Orders / History", body: (
      <div className="space-y-2">
        <div className="font-bold">My Orders</div>
        <Row><Pill tone="accent">All</Pill><Pill>Active</Pill><Pill>Delivered</Pill></Row>
        {[
          ["HZ-88421","Delivered","₹46,551","Site B-12"],
          ["HZ-88418","In transit","₹12,200","Site A-04"],
          ["HZ-88402","Delivered","₹88,900","Site B-12"],
        ].map(([id,st,a,s])=> <Box key={id}><div className="flex justify-between"><span className="font-mono">{id}</span><Pill tone={st==="Delivered"?"success":"accent"}>{st}</Pill></div><div className="flex justify-between"><span>{s}</span><span className="font-bold">{a}</span></div></Box>)}
      </div>
    )
  },
  {
    id: "c11", title: "Projects & Sites", body: (
      <div className="space-y-2">
        <div className="font-bold">Projects</div>
        {[
          ["Site B-12 Whitefield","₹4.2L this month","Active"],
          ["Site A-04 Hebbal","₹1.8L","Active"],
          ["Site C-09 Sarjapur","₹0","Paused"],
        ].map(([n,a,st])=> <Box key={n}><div className="font-medium">{n}</div><div className="text-muted-foreground">{a}</div><Pill tone={st==="Active"?"success":"muted"}>{st}</Pill></Box>)}
        <Btn>+ Add new site</Btn>
      </div>
    )
  },
  {
    id: "c12", title: "Credit & Statements", body: (
      <div className="space-y-2">
        <div className="font-bold">HOUSIZY Credit</div>
        <Box className="bg-foreground text-background"><div className="text-[10px]">Available</div><div className="text-xl font-bold">₹3,20,000</div><div className="text-[10px]">of ₹5,00,000 limit</div></Box>
        <div className="font-medium">Outstanding</div>
        <Box><div className="flex justify-between"><span>Cycle 26-Nov → 25-Dec</span><span className="font-bold">₹1,80,000</span></div><div className="text-muted-foreground">Due 25-Dec · 12 days</div><Btn primary>Pay now</Btn></Box>
        <div className="font-medium">Statements</div>
        <Box>October · ₹2.1L · PDF</Box>
        <Box>September · ₹1.6L · PDF</Box>
      </div>
    )
  },
  {
    id: "c13", title: "Team & Approvals", body: (
      <div className="space-y-2">
        <div className="font-bold">Team</div>
        {[
          ["Ramesh K.","Owner","All sites"],
          ["Sunita P.","Procurement","B-12, A-04"],
          ["Arif M.","Site supervisor","B-12"],
        ].map(([n,r,s])=> <Box key={n}><div className="font-medium">{n}</div><div className="text-muted-foreground">{r} · {s}</div></Box>)}
        <Btn>+ Invite member</Btn>
        <div className="font-medium mt-2">Approvals pending (2)</div>
        <Box><div>Order ₹88,400 by Arif M.</div><Row><Btn primary>Approve</Btn><Btn>Reject</Btn></Row></Box>
      </div>
    )
  },
  {
    id: "c14", title: "Notifications", body: (
      <div className="space-y-2">
        <div className="font-bold">Notifications</div>
        {[
          ["[pkg]","Order HZ-88421 delivered","2 min ago"],
          ["[pay]","Invoice INV-88421 ready","2 min ago"],
          ["[!]","Stock low: Steel 12mm at Whitefield","1h ago"],
          ["[done]","Credit limit increased to ₹5L","Yesterday"],
        ].map(([i,t,ts],k)=> <Box key={k}><Row><span>{i}</span><div className="flex-1"><div className="font-medium">{t}</div><div className="text-muted-foreground text-[10px]">{ts}</div></div></Row></Box>)}
      </div>
    )
  },
  {
    id: "c15", title: "Account / Settings", body: (
      <div className="space-y-2">
        <div className="font-bold">Account</div>
        <Box><div className="font-medium">Ramesh K.</div><div className="text-muted-foreground">ACME Constructions · GSTIN 29ABC…</div></Box>
        {["Company profile","GST & Billing","Saved addresses","Payment methods","Language: English","Help & support","Logout"].map(x=> <Box key={x}>{x} ›</Box>)}
        <div className="text-center text-[9px] text-muted-foreground">v1.0.0</div>
      </div>
    )
  },
  {
    id: "c16", title: "Pincode / Serviceability", body: (
      <div className="space-y-2">
        <div className="font-bold">Set delivery pincode</div>
        <div className="text-muted-foreground">We only show SKUs deliverable to your site.</div>
        <Box><MapPin className="inline w-3 h-3 mr-1"/> Detect my location</Box>
        <Box>Pincode <span className="font-mono">560066</span> <Pill tone="success">Serviceable</Pill></Box>
        <Box>Pincode <span className="font-mono">560024</span> <Pill tone="warn">Express only till 4pm</Pill></Box>
        <Box>Pincode <span className="font-mono">580001</span> <Pill tone="danger">Not yet live</Pill></Box>
        <Btn primary>Continue</Btn>
        <div className="text-[9px] text-muted-foreground text-center">Pincode drives price, stock & 60-min SLA eligibility.</div>
      </div>
    )
  },
  {
    id: "c17", title: "Apply for Net-30 Credit", body: (
      <div className="space-y-2">
        <div className="font-bold">HOUSIZY Credit · Net-30</div>
        <Box className="bg-foreground text-background"><div className="text-[10px]">Pre-qualified up to</div><div className="text-xl font-bold">₹5,00,000</div></Box>
        <div className="font-medium">Upload documents</div>
        <Box><FileText className="inline w-3 h-3 mr-1"/> GST Certificate <Pill tone="success">Uploaded</Pill></Box>
        <Box><FileText className="inline w-3 h-3 mr-1"/> Last 6 months bank statement <Pill tone="warn">Pending</Pill></Box>
        <Box><FileText className="inline w-3 h-3 mr-1"/> PAN of authorised signatory <Pill tone="success">Uploaded</Pill></Box>
        <Box><PenLine className="inline w-3 h-3 mr-1"/> e-Sign personal guarantee</Box>
        <Btn primary>Submit for underwriting</Btn>
        <div className="text-[9px] text-muted-foreground">Decision in 24h · soft pull only</div>
      </div>
    )
  },
  {
    id: "c18", title: "Return / Issue · Support", body: (
      <div className="space-y-2">
        <div className="font-bold">Raise an issue</div>
        <Box><div className="font-medium">HZ-88421 · 50 PPC bags</div><div className="text-muted-foreground">Delivered 14-Nov · ₹17,250</div></Box>
        <div className="font-medium">What went wrong?</div>
        <Row><Pill tone="accent">Damaged</Pill><Pill>Short qty</Pill><Pill>Wrong item</Pill><Pill>Late</Pill></Row>
        <Box><Camera className="inline w-3 h-3 mr-1"/> Add photos (up to 5)</Box>
        <Box>Describe the issue…</Box>
        <Row><Btn>Replace</Btn><Btn primary>Refund to credit</Btn></Row>
        <Box className="bg-muted"><div className="font-medium"><MessageSquare className="inline w-3 h-3 mr-1"/> Chat with support</div><div className="text-muted-foreground">Avg response · 3 min · WhatsApp also available</div></Box>
      </div>
    )
  },
  {
    id: "c19", title: "Rate & Review delivery", body: (
      <div className="space-y-2 pt-2">
        <div className="text-center font-bold">How was your delivery?</div>
        <div className="text-center text-muted-foreground">HZ-88421 · 50 PPC bags · Driver Ravi</div>
        <div className="text-center text-2xl tracking-widest">★ ★ ★ ★ ☆</div>
        <div className="font-medium">Tag what worked</div>
        <Row><Pill tone="success">On-time</Pill><Pill tone="success">Good packing</Pill><Pill>Polite driver</Pill><Pill>Right qty</Pill></Row>
        <Box>Anything else? (optional)</Box>
        <Btn primary>Submit rating</Btn>
        <div className="text-[9px] text-center text-muted-foreground">Ratings power vendor SLA scores & payout tier.</div>
      </div>
    )
  },
];

/* ---------- VENDOR MOBILE ---------- */
const vendorMobileScreens = [
  {
    id: "v01", title: "Vendor Login / Hub Switch", body: (
      <div className="space-y-3 pt-4">
        <div className="text-center font-bold">HOUSIZY Vendor</div>
        <Box>Mobile +91 _________</Box>
        <Box>OTP ______</Box>
        <Btn primary>Sign in</Btn>
        <div className="font-medium mt-4">Choose warehouse</div>
        <Box className="border-foreground">● Whitefield Hub <Pill tone="success">Live</Pill></Box>
        <Box>○ Hebbal Hub <Pill tone="warn">Paused</Pill></Box>
        <Box>○ Sarjapur Hub <Pill tone="success">Live</Pill></Box>
      </div>
    )
  },
  {
    id: "v02", title: "Order Queue (SLA ringing)", body: (
      <div className="space-y-2">
        <div className="flex justify-between"><div className="font-bold">Orders · Whitefield</div><Pill tone="accent">Live</Pill></div>
        <Box className="border-red-500 bg-red-50"><div className="flex justify-between"><span className="font-bold">HZ-88431</span><Pill tone="danger">SLA 02:14 <Clock className="inline w-3 h-3 mr-1"/></Pill></div><div>50 bags PPC · ₹17,250</div><Btn primary>Accept</Btn></Box>
        <Box><div className="flex justify-between"><span className="font-mono">HZ-88429</span><Pill tone="warn">28:05</Pill></div><div>20 TMT bars · ₹19,400</div></Box>
        <Box><div className="flex justify-between"><span className="font-mono">HZ-88421</span><Pill tone="success">Packed</Pill></div><div>Driver Ravi · dispatched</div></Box>
      </div>
    )
  },
  {
    id: "v03", title: "Order Detail · Pick → Pack → Dispatch", body: (
      <div className="space-y-2">
        <div className="font-bold">HZ-88431 · SLA 58:00</div>
        <Box>ACME Constructions · Site B-12</Box>
        <div className="font-medium">Picking checklist</div>
        <Box>☑ UltraTech PPC 50kg × 50 · Bay 3</Box>
        <Box>☑ Polythene cover × 50</Box>
        <Box>☐ Loading slip signed</Box>
        <div className="grid grid-cols-4 gap-1 mt-2">
          <Pill tone="accent">Picking</Pill>
          <Pill>Packed</Pill>
          <Pill>Ready</Pill>
          <Pill>Driver</Pill>
        </div>
        <Btn primary>Mark Packed</Btn>
      </div>
    )
  },
  {
    id: "v04", title: "Out-of-stock · Substitution", body: (
      <div className="space-y-2">
        <Box className="bg-yellow-50 border-yellow-500"><div className="font-bold"><AlertTriangle className="inline w-3 h-3 mr-1"/> Out of stock</div>Birla Super PPC 50kg × 50</Box>
        <div className="font-medium">Suggest substitution</div>
        <Box>UltraTech PPC 50kg · same price · in stock <Btn primary>Send to customer</Btn></Box>
        <Box>ACC Gold PPC 50kg · +₹8/bag <Btn>Send</Btn></Box>
        <Btn>Cancel & refund</Btn>
      </div>
    )
  },
  {
    id: "v05", title: "Driver Assign", body: (
      <div className="space-y-2">
        <div className="font-bold">Assign driver · HZ-88431</div>
        {[
          ["Ravi K.","2.1 km away","Free"],
          ["Mahesh D.","Returning","8 min"],
          ["Iqbal R.","On break","-"],
        ].map(([n,d,s])=> <Box key={n}><div className="flex justify-between"><div><div className="font-medium">{n}</div><div className="text-muted-foreground">{d}</div></div><Pill tone={s==="Free"?"success":"muted"}>{s}</Pill></div><Btn primary>Assign</Btn></Box>)}
      </div>
    )
  },
  {
    id: "v06", title: "Inventory Quick-Edit", body: (
      <div className="space-y-2">
        <div className="font-bold">Inventory · Whitefield</div>
        <Box className="bg-muted"><Search className="inline w-3 h-3 mr-1"/> Search SKU</Box>
        {[
          ["UltraTech PPC 50kg","842 bags","In stock"],
          ["TMT 12mm","56 bars","Low"],
          ["River sand","0 T","Out"],
        ].map(([n,q,s])=> <Box key={n}><div className="flex justify-between"><div className="font-medium">{n}</div><Pill tone={s==="In stock"?"success":s==="Low"?"warn":"danger"}>{s}</Pill></div><Row><Btn>−</Btn><div className="flex-1 text-center">{q}</div><Btn>+</Btn></Row></Box>)}
      </div>
    )
  },
  {
    id: "v07", title: "Earnings & Payout Status", body: (
      <div className="space-y-2">
        <div className="font-bold">Earnings</div>
        <Box className="bg-foreground text-background"><div className="text-[10px]">Today</div><div className="text-xl font-bold">₹1,42,800</div><div className="text-[10px]">18 orders</div></Box>
        <Box><div className="flex justify-between"><span>Next payout</span><span className="font-bold">₹3,40,200</span></div><div className="text-muted-foreground">Settles 28-Nov · T+2</div></Box>
        <div className="font-medium">Holds (1)</div>
        <Box className="bg-yellow-50"><div className="font-medium">₹18,400 on hold</div><div className="text-muted-foreground">Reason: Customer dispute HZ-88301 · awaiting POD</div></Box>
      </div>
    )
  },
  {
    id: "v08", title: "Vendor KYC & Profile", body: (
      <div className="space-y-2">
        <div className="font-bold">My business · ACME Hub</div>
        <Box><div className="font-medium">KYC status</div><Pill tone="success">Verified</Pill> · expires Mar 2027</Box>
        <Box><FileText className="inline w-3 h-3 mr-1"/> GSTIN 29ABCDE… <Pill tone="success">OK</Pill></Box>
        <Box><FileText className="inline w-3 h-3 mr-1"/> MSME / Udyam <Pill tone="success">OK</Pill></Box>
        <Box><FileText className="inline w-3 h-3 mr-1"/> Cancelled cheque <Pill tone="warn">Re-upload</Pill></Box>
        <Box><Tag className="inline w-3 h-3 mr-1"/> Categories: Cement, TMT, Sand, Bricks</Box>
        <Box><Clock className="inline w-3 h-3 mr-1"/> Hub hours: 7am – 8pm</Box>
        <Btn primary>Update documents</Btn>
      </div>
    )
  },
  {
    id: "v09", title: "Alerts & Announcements", body: (
      <div className="space-y-2">
        <div className="font-bold">Alerts</div>
        <Box className="border-l-4 border-red-500"><div className="font-bold">SLA risk · HZ-88431</div><div className="text-muted-foreground">2 min left to pack</div></Box>
        <Box className="border-l-4 border-yellow-500"><div className="font-bold">Low stock · TMT 12mm</div><div className="text-muted-foreground">56 bars at Whitefield</div></Box>
        <Box className="border-l-4 border-blue-400"><div className="font-bold">Payout settled</div><div className="text-muted-foreground">₹3,40,200 credited · ref UTR…</div></Box>
        <Box className="border-l-4 border-green-500"><div className="font-bold">New policy: surge pricing live</div><div className="text-muted-foreground">Read in 30 sec</div></Box>
      </div>
    )
  },
  {
    id: "v10", title: "Returns & Disputes", body: (
      <div className="space-y-2">
        <div className="font-bold">Open disputes · 2</div>
        <Box className="bg-yellow-50"><div className="flex justify-between"><span className="font-bold">HZ-88301</span><Pill tone="warn">Customer claim</Pill></div><div>5 bags short · ₹1,725</div><div className="grid grid-cols-3 gap-1 mt-1">{[1,2,3].map(i=> <div key={i} className="h-10 bg-muted rounded"/>)}</div><Row><Btn>Accept</Btn><Btn>Counter</Btn><Btn primary>Escalate to ops</Btn></Row></Box>
        <Box><div className="font-medium">HZ-88277 · Damaged TMT</div><Pill tone="success">Resolved · refund ₹420</Pill></Box>
      </div>
    )
  },
];

/* ---------- VENDOR DESKTOP ---------- */
const vendorDesktopScreens = [
  {
    id: "vd01", title: "Vendor Dashboard (7-day trend)", body: (
      <div className="flex h-full">
        <div className="w-40 bg-muted/40 p-2 space-y-1">
          {["Dashboard","Orders","Inventory","Dispatch","Earnings","Team","Settings"].map(i=> <div key={i} className="py-1 px-2 rounded hover:bg-muted">{i}</div>)}
        </div>
        <div className="flex-1 p-3 space-y-2">
          <div className="font-bold">Dashboard · ACME Hub Group</div>
          <Row>
            <Box className="flex-1"><div className="text-muted-foreground">Orders 7d</div><div className="font-bold text-base">412</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">Revenue</div><div className="font-bold text-base">₹28.4L</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">SLA hit</div><div className="font-bold text-base">96.2%</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">Rating</div><div className="font-bold text-base">4.8★</div></Box>
          </Row>
          <Box className="h-32"><div className="text-muted-foreground mb-1">Sales · last 7 days</div><div className="flex items-end gap-1 h-20">{[40,55,30,70,65,80,90].map((h,i)=><div key={i} className="flex-1 bg-foreground/70 rounded-t" style={{height:`${h}%`}}/>)}</div></Box>
          <Row><Box className="flex-1"><div className="font-medium">Top SKUs</div><Bar w="80%"/><Bar w="60%"/><Bar w="40%"/></Box><Box className="flex-1"><div className="font-medium">Hub performance</div>Whitefield 98% · Hebbal 94% · Sarjapur 91%</Box></Row>
        </div>
      </div>
    )
  },
  {
    id: "vd02", title: "Inventory · Bulk CSV Upload", body: (
      <div className="p-3 space-y-2">
        <div className="font-bold">Inventory</div>
        <Row><Btn primary><Upload className="inline w-3 h-3 mr-1"/> Upload CSV</Btn><Btn>Download template</Btn><Btn>+ Add SKU</Btn></Row>
        <Box className="border-dashed border-2 h-20 flex items-center justify-center text-muted-foreground">Drag CSV here · 642 SKUs detected · 12 errors</Box>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">SKU</th><th>Name</th><th>Hub</th><th>Stock</th><th>Price</th><th>Status</th></tr></thead>
          <tbody>
            {[
              ["UT-PPC-50","UltraTech PPC 50kg","Whitefield","842","₹385","Live"],
              ["TMT-12","Kamdhenu TMT 12mm","Whitefield","56","₹970","Low"],
              ["SAND-RV","River Sand 1T","Hebbal","0","₹2800","Out"],
              ["BRK-RD","Red bricks","Sarjapur","12k","₹9","Live"],
            ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-mono">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td><Pill tone={r[5]==="Live"?"success":r[5]==="Low"?"warn":"danger"}>{r[5]}</Pill></td></tr>)}
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: "vd03", title: "Live Dispatch Board", body: (
      <div className="p-3 space-y-2">
        <div className="font-bold">Dispatch Board</div>
        <Row className="h-72">
          {["New","Picking","Packed","Out for delivery"].map(col=> (
            <div key={col} className="flex-1 bg-muted/30 rounded p-1 space-y-1">
              <div className="font-medium text-center">{col}</div>
              {[1,2,3].map(i=> <Box key={i} className="bg-background"><div className="font-mono text-[10px]">HZ-884{Math.floor(Math.random()*99)}</div><div>50 PPC · Whitefield</div><Pill tone="accent">Driver Ravi</Pill></Box>)}
            </div>
          ))}
        </Row>
      </div>
    )
  },
  {
    id: "vd04", title: "Earnings Ledger (14d, Tally export)", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Earnings Ledger · 14 days</div><Row><Btn>Export Tally XML</Btn><Btn primary>Export CSV</Btn></Row></div>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Date</th><th>Order</th><th>Gross</th><th>Commission</th><th>GST</th><th>Net</th><th>Status</th></tr></thead>
          <tbody>{Array.from({length:8}).map((_,i)=> <tr key={i} className="border-t"><td className="p-1">{14-i}-Nov</td><td className="font-mono">HZ-884{20+i}</td><td>₹{(20+i)*1000}</td><td>₹{i*120}</td><td>₹{i*40}</td><td className="font-bold">₹{(20+i)*900}</td><td><Pill tone={i<3?"success":"warn"}>{i<3?"Paid":"Queued"}</Pill></td></tr>)}</tbody>
        </table>
        <div className="text-right font-bold">Total net: ₹3,40,200</div>
      </div>
    )
  },
  {
    id: "vd05", title: "Team & Roles", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Team</div><Btn primary>+ Invite</Btn></div>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Name</th><th>Role</th><th>Hubs</th><th>Permissions</th><th>Status</th></tr></thead>
          <tbody>
            {[
              ["Suresh M.","Owner","All","Full","Active"],
              ["Geeta K.","Hub manager","Whitefield","Orders, Inventory","Active"],
              ["Vikram J.","Picker","Whitefield","Picking only","Active"],
              ["Anitha S.","Accountant","All","Earnings, Reports","Invited"],
            ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="text-muted-foreground">{r[3]}</td><td><Pill tone={r[4]==="Active"?"success":"warn"}>{r[4]}</Pill></td></tr>)}
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: "vd06", title: "Warehouses (multi-hub control)", body: (
      <div className="p-3 space-y-2">
        <div className="font-bold">Warehouses</div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Whitefield Hub","560066","Live","18 orders/h"],
            ["Hebbal Hub","560024","Paused","reason: staffing"],
            ["Sarjapur Hub","560035","Live","6 orders/h"],
          ].map(([n,p,s,m])=> <Box key={n}><div className="font-medium">{n}</div><div className="text-muted-foreground">{p}</div><Pill tone={s==="Live"?"success":"warn"}>{s}</Pill><div className="mt-1 text-[10px]">{m}</div><Row><Btn>Pause</Btn><Btn primary>Open</Btn></Row></Box>)}
        </div>
      </div>
    )
  },
  {
    id: "vd07", title: "Orders · Search & Filter", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">All Orders</div><Row><Btn>Export</Btn><Btn primary>+ New manual order</Btn></Row></div>
        <Row><Box className="flex-1 bg-muted"><Search className="inline w-3 h-3 mr-1"/> Order ID, customer, GSTIN, SKU</Box><Pill tone="accent">Today</Pill><Pill>This week</Pill><Pill>All hubs ▾</Pill><Pill>All statuses ▾</Pill></Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Order</th><th>Customer</th><th>Hub</th><th>Value</th><th>SLA</th><th>Status</th><th>Driver</th></tr></thead>
          <tbody>{Array.from({length:8}).map((_,i)=> <tr key={i} className="border-t"><td className="p-1 font-mono">HZ-884{30+i}</td><td>ACME · B-{12+i}</td><td>Whitefield</td><td>₹{(15+i*3)*1000}</td><td>{50-i*4}m</td><td><Pill tone={i%3===0?"success":i%3===1?"warn":"accent"}>{i%3===0?"Delivered":i%3===1?"In transit":"Picking"}</Pill></td><td>{i%2?"Ravi K.":"Mahesh D."}</td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "vd08", title: "Catalog · Pricing rules", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Catalog & Pricing</div><Row><Btn>+ Add rule</Btn><Btn primary>Publish</Btn></Row></div>
        <Box><div className="font-medium">Slab pricing · UltraTech PPC 50kg</div><table className="w-full text-left mt-1"><thead className="bg-muted"><tr><th className="p-1">Qty (bags)</th><th>Price / bag</th><th>Margin</th></tr></thead><tbody>{[["1–49","₹395","12%"],["50–199","₹385","14%"],["200+","₹372","16%"]].map(r=> <tr key={r[0]} className="border-t"><td className="p-1">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody></table></Box>
        <Row><Box className="flex-1"><div className="font-medium">Pincode pricing</div>560066 base · 560024 +₹4 · 560035 +₹6</Box><Box className="flex-1"><div className="font-medium">Buyer-tier pricing</div>Gold −2% · Silver base · New +1%</Box></Row>
        <Box><div className="font-medium">Active promotions</div>FESTIVE10 · 10% off cement (ends 30-Nov) · MONSOON · ₹50 off sand/T</Box>
      </div>
    )
  },
  {
    id: "vd09", title: "Customers (B2B accounts)", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">My Buyers</div><Row><Btn>Export</Btn><Pill tone="accent">412 accounts</Pill></Row></div>
        <Row><Box className="flex-1 bg-muted"><Search className="inline w-3 h-3 mr-1"/> Search by GSTIN, company, site</Box><Pill>Top 20</Pill><Pill>At-risk</Pill></Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Company</th><th>GSTIN</th><th>Sites</th><th>30-d GMV</th><th>Outstanding</th><th>Tier</th></tr></thead>
          <tbody>{[
            ["ACME Constructions","29ABC…","5","₹8.4L","₹62k","Gold"],
            ["Sterling Builders","29DEF…","2","₹3.1L","₹0","Silver"],
            ["Prestige Homes","29GHI…","12","₹14.2L","₹2.1L","Gold"],
            ["UrbanNest","29JKL…","1","₹48k","₹48k","New"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-medium">{r[0]}</td><td className="text-muted-foreground">{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td><Pill tone={r[5]==="Gold"?"success":r[5]==="New"?"warn":"muted"}>{r[5]}</Pill></td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "vd10", title: "Returns & Disputes", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Returns & Disputes</div><Row><Pill tone="danger">2 open</Pill><Pill tone="warn">1 escalated</Pill><Pill>Resolved 38</Pill></Row></div>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Ticket</th><th>Order</th><th>Customer</th><th>Reason</th><th>Amount</th><th>Owner</th><th>Status</th></tr></thead>
          <tbody>{[
            ["DSP-411","HZ-88301","ACME","5 bags short","₹1,725","Geeta","Customer claim"],
            ["DSP-410","HZ-88277","Sterling","Damaged TMT","₹420","Vikram","Resolved"],
            ["DSP-408","HZ-88254","Prestige","Late by 22 min","₹0","Ops","Escalated"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-mono">{r[0]}</td><td className="font-mono">{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td>{r[5]}</td><td><Pill tone={r[6]==="Resolved"?"success":r[6]==="Escalated"?"danger":"warn"}>{r[6]}</Pill></td></tr>)}</tbody>
        </table>
      </div>
    )
  },
];

/* ---------- ADMIN MOBILE ---------- */
const adminMobileScreens = [
  {
    id: "a01", title: "Admin 2FA Login", body: (
      <div className="space-y-3 pt-6">
        <div className="text-center font-bold">HOUSIZY Ops</div>
        <Box>admin@housizy.com</Box>
        <Box>Password ••••••••</Box>
        <Btn>Continue</Btn>
        <div className="font-medium mt-4">2FA code</div>
        <div className="grid grid-cols-6 gap-1">{Array.from({length:6}).map((_,i)=> <Box key={i} className="text-center h-8"/>)}</div>
        <Btn primary>Verify & sign in</Btn>
        <div className="text-[9px] text-center text-muted-foreground">Refunds, overrides, KYC require 2FA</div>
      </div>
    )
  },
  {
    id: "a02", title: "Live Ops Dashboard", body: (
      <div className="space-y-2">
        <div className="font-bold">Live Ops · today</div>
        <div className="grid grid-cols-2 gap-2">
          <Box><div className="text-muted-foreground">Orders/h</div><div className="font-bold text-base">142</div></Box>
          <Box><div className="text-muted-foreground">SLA hit</div><div className="font-bold text-base text-green-600">94.8%</div></Box>
          <Box><div className="text-muted-foreground">Revenue</div><div className="font-bold text-base">₹38.2L</div></Box>
          <Box><div className="text-muted-foreground">Open incidents</div><div className="font-bold text-base text-red-600">3</div></Box>
        </div>
        <Box className="h-28"><div className="text-muted-foreground">Hub heat-map</div><div className="grid grid-cols-4 gap-1 mt-1">{[80,40,90,60,30,70,55,85].map((v,i)=> <div key={i} className="h-6 rounded" style={{background:`oklch(0.6 0.18 ${20+v*2})`,opacity:v/100+0.3}}/>)}</div></Box>
      </div>
    )
  },
  {
    id: "a03", title: "Incident Feed (P1/P2/P3)", body: (
      <div className="space-y-2">
        <div className="flex justify-between"><div className="font-bold">Incidents</div><Pill tone="danger">3 open</Pill></div>
        <Row><Pill tone="danger">P1</Pill><Pill tone="warn">P2</Pill><Pill>P3</Pill><Pill>All</Pill></Row>
        <Box className="border-l-4 border-red-500"><div className="flex justify-between"><span className="font-bold">P1 · Stuck order HZ-88412</span><span className="text-[10px]">2m</span></div><div>SLA breached · vendor unresponsive</div><Row><Btn primary>Open</Btn><Btn>Snooze</Btn><Btn>Resolve</Btn></Row></Box>
        <Box className="border-l-4 border-yellow-500"><div className="font-bold">P2 · Driver offline 9m</div><div>Iqbal R · last seen Hebbal</div></Box>
        <Box className="border-l-4 border-blue-400"><div className="font-bold">P3 · Low stock TMT 12mm</div><div>Whitefield Hub · 56 bars left</div></Box>
      </div>
    )
  },
  {
    id: "a04", title: "Order Detail (override)", body: (
      <div className="space-y-2">
        <div className="font-bold">HZ-88412</div>
        <Box>ACME · Site B-12 · ₹46,551</Box>
        <Box>Vendor Whitefield Hub · accepted 10:01 · stuck at Picking</Box>
        <div className="font-medium">Actions <Pill tone="danger">2FA</Pill></div>
        <Btn primary>Reassign vendor</Btn>
        <Btn>Refund ₹46,551</Btn>
        <Btn>Issue credit note</Btn>
        <Btn>Force status: Packed</Btn>
        <Box><div className="font-medium">Audit trail</div><div className="text-muted-foreground text-[10px]">10:01 accepted · 10:18 SLA risk · 10:22 P1 raised</div></Box>
      </div>
    )
  },
  {
    id: "a05", title: "Vendor KYC Approval", body: (
      <div className="space-y-2">
        <div className="font-bold">KYC Queue · 4 pending</div>
        <Box><div className="flex justify-between"><div className="font-medium">BuildMart Supplies</div><Pill tone="warn">Review</Pill></div><div className="text-muted-foreground">GSTIN · PAN · MSME · Cancelled cheque</div><div className="grid grid-cols-4 gap-1 mt-1">{[1,2,3,4].map(i=> <div key={i} className="h-10 bg-muted rounded"/>)}</div><Row><Btn primary>Approve</Btn><Btn>Request more</Btn><Btn>Reject</Btn></Row></Box>
        <Box><div className="font-medium">CementHub · Sarjapur</div><Pill tone="success">Auto-passed</Pill></Box>
      </div>
    )
  },
  {
    id: "a06", title: "Live Map (mobile)", body: (
      <div className="space-y-2">
        <div className="font-bold">Live Map</div>
        <div className="h-60 bg-muted rounded relative flex items-center justify-center text-muted-foreground"><MapIcon className="inline w-3 h-3 mr-1"/> Bangalore<span className="absolute top-3 left-4">🟢 V</span><span className="absolute top-10 left-20">🚚</span><span className="absolute bottom-6 right-8">🟢 V</span><span className="absolute top-20 right-12">🔴</span></div>
        <Row><Pill tone="accent">Vendors</Pill><Pill>Drivers</Pill><Pill>Customers</Pill><Pill>Demand</Pill></Row>
        <Box><div className="text-muted-foreground">3 vendors · 12 drivers · 142 active orders</div></Box>
      </div>
    )
  },
  {
    id: "a07", title: "Driver Detail · Live", body: (
      <div className="space-y-2">
        <div className="font-bold">Ravi K. · DL 7820</div>
        <Box><div className="flex justify-between"><span>Status</span><Pill tone="success">On delivery</Pill></div><div className="flex justify-between"><span>Current order</span><span className="font-mono">HZ-88431</span></div><div className="flex justify-between"><span>ETA</span><span>9 min</span></div></Box>
        <div className="h-32 bg-muted rounded relative"><MapIcon className="inline w-3 h-3 mr-1"/> <span className="absolute top-3 left-4">🏬</span><span className="absolute top-14 left-24">🚚</span><span className="absolute bottom-3 right-6">🏠</span></div>
        <Box><div className="font-medium">Today</div>12 deliveries · 11 on-time · 92% SLA · 4.9★</Box>
        <Row><Btn><Phone className="inline w-3 h-3 mr-1"/> Call</Btn><Btn><MessageSquare className="inline w-3 h-3 mr-1"/> WhatsApp</Btn><Btn primary>Reassign order</Btn></Row>
        <Btn><AlertTriangle className="inline w-3 h-3 mr-1"/> Mark driver offline</Btn>
      </div>
    )
  },
  {
    id: "a08", title: "Surge & SLA Quick-toggle", body: (
      <div className="space-y-2">
        <div className="font-bold">Ops Controls <Pill tone="danger">2FA</Pill></div>
        <Box><div className="flex justify-between"><span className="font-medium">SLA mode</span><Pill tone="accent">NORMAL</Pill></div><Row><Btn>Strict 45m</Btn><Btn primary>Normal 60m</Btn><Btn>Relaxed 90m</Btn></Row></Box>
        <Box><div className="flex justify-between"><span className="font-medium">Surge pricing</span><Pill tone="warn">OFF</Pill></div><Row><Btn>1.0×</Btn><Btn>1.2×</Btn><Btn primary>1.5×</Btn><Btn>2.0×</Btn></Row><div className="text-[9px] text-muted-foreground">Applies to selected hubs only</div></Box>
        <Box><div className="font-medium">Pause hub</div><Row><Pill tone="success">Whitefield</Pill><Pill tone="warn">Hebbal</Pill><Pill tone="success">Sarjapur</Pill></Row><Btn>Pause Hebbal</Btn></Box>
        <Box className="bg-muted"><div className="font-medium">🧪 Inject test failure</div><div className="text-muted-foreground">Rehearse incident response</div></Box>
      </div>
    )
  },
  {
    id: "a09", title: "Notifications Inbox", body: (
      <div className="space-y-2">
        <div className="flex justify-between"><div className="font-bold">Notifications</div><Pill tone="accent">12 unread</Pill></div>
        <Row><Pill tone="accent">All</Pill><Pill>SLA</Pill><Pill>KYC</Pill><Pill>Finance</Pill><Pill>System</Pill></Row>
        <Box className="border-l-4 border-red-500"><div className="font-bold">P1 escalated · HZ-88412</div><div className="text-muted-foreground">2 min ago</div></Box>
        <Box className="border-l-4 border-yellow-500"><div className="font-bold">KYC awaiting your review</div><div className="text-muted-foreground">BuildMart Supplies · 14m</div></Box>
        <Box className="border-l-4 border-blue-400"><div className="font-bold">Daily ops digest</div><div className="text-muted-foreground">94.8% SLA · ₹38.2L revenue</div></Box>
        <Box><div className="font-medium">Payout batch posted</div><div className="text-muted-foreground">42 vendors · ₹1.18 Cr</div></Box>
      </div>
    )
  },
];

/* ---------- ADMIN DESKTOP ---------- */
const adminDesktopScreens = [
  {
    id: "ad01", title: "Mission Control — Live Ops", body: (
      <div className="flex h-full">
        <div className="w-36 bg-foreground text-background p-2 space-y-1 text-[10px]">
          {["Live Ops","Mission Control","Live Map","Orders","Warehouses","Vendors","KYC Lifecycle","Customers","Revenue & Margin","Finance / Tally","Settings"].map(i=> <div key={i} className="py-1 px-2 rounded hover:bg-background/10">{i}</div>)}
        </div>
        <div className="flex-1 p-3 space-y-2">
          <div className="flex justify-between"><div className="font-bold">Live Ops</div><Row><Pill tone="success">SLA mode: NORMAL</Pill><Pill tone="warn">Surge: OFF</Pill><Btn>Inject test failure</Btn></Row></div>
          <Row>
            <Box className="flex-1"><div className="text-muted-foreground">Revenue (today)</div><div className="font-bold">₹38.2L</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">Net profit</div><div className="font-bold">₹6.4L</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">Orders/h</div><div className="font-bold">142</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">SLA hit</div><div className="font-bold text-green-600">94.8%</div></Box>
            <Box className="flex-1"><div className="text-muted-foreground">Active drivers</div><div className="font-bold">28</div></Box>
          </Row>
          <Row className="h-44">
            <Box className="flex-1"><div className="font-medium">Live map (Bangalore)</div><div className="h-32 bg-muted rounded mt-1 relative">{Array.from({length:18}).map((_,i)=> <span key={i} className="absolute text-[10px]" style={{left:`${(i*23)%90}%`,top:`${(i*17)%80}%`}}>{i%3===0?"🟢":i%3===1?"🚚":"🟠"}</span>)}</div></Box>
            <Box className="w-56"><div className="font-medium">Incident feed</div><Pill tone="danger">P1 · HZ-88412</Pill><Pill tone="warn">P2 · driver offline</Pill><Pill>P3 · low stock</Pill></Box>
          </Row>
        </div>
      </div>
    )
  },
  {
    id: "ad02", title: "Mission Control — Pipeline", body: (
      <div className="p-3 space-y-2 h-full">
        <div className="font-bold">Order Pipeline · all hubs</div>
        <div className="grid grid-cols-6 gap-2 h-72">
          {["Placed","Accepted","Picking","Packed","Dispatched","Delivered"].map(s=> (
            <div key={s} className="bg-muted/40 rounded p-1 space-y-1 overflow-hidden">
              <div className="font-medium text-center">{s}</div>
              <div className="text-[9px] text-center text-muted-foreground">{Math.floor(Math.random()*60)+10} orders</div>
              {[1,2,3,4].map(i=> <Box key={i} className="bg-background text-[9px]"><div className="font-mono">HZ-{Math.floor(Math.random()*9000)+1000}</div>₹{Math.floor(Math.random()*50)+10}k</Box>)}
            </div>
          ))}
        </div>
        <Box><div className="font-medium">Demand heat-map · last 60 min</div><div className="grid grid-cols-12 gap-0.5">{Array.from({length:36}).map((_,i)=> <div key={i} className="h-3 rounded-sm" style={{background:`oklch(0.65 0.2 ${20+(i%12)*5})`,opacity:(Math.random()*0.7+0.3)}}/>)}</div></Box>
      </div>
    )
  },
  {
    id: "ad03", title: "Live Map + Replay", body: (
      <div className="p-3 space-y-2 h-full">
        <div className="flex justify-between"><div className="font-bold">Live Map</div><Row><Pill tone="accent">Vendors</Pill><Pill tone="accent">Drivers</Pill><Pill>Customers</Pill><Pill>Demand heat</Pill><Btn>▶ Replay last hour</Btn></Row></div>
        <div className="h-72 bg-muted rounded relative">{Array.from({length:40}).map((_,i)=> <span key={i} className="absolute text-[12px]" style={{left:`${(i*13)%95}%`,top:`${(i*9)%88}%`}}>{i%4===0?"🏬":i%4===1?"🚚":i%4===2?"🟢":"🟠"}</span>)}</div>
        <Row><Box className="flex-1">Time: 10:00 ━━━━━●━━━━ 11:00</Box></Row>
      </div>
    )
  },
  {
    id: "ad04", title: "Warehouses & Vendors", body: (
      <div className="p-3 space-y-2">
        <div className="font-bold">Warehouses</div>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Hub</th><th>Vendor</th><th>Pincodes</th><th>Orders/d</th><th>SLA</th><th>Status</th><th></th></tr></thead>
          <tbody>{[
            ["Whitefield","ACME Hub","560066, 560067","312","96%","Live"],
            ["Hebbal","BuildMart","560024, 560092","118","91%","Paused"],
            ["Sarjapur","CementHub","560035","84","98%","Live"],
            ["Yelahanka","NorthMat","560064","56","89%","Live"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-medium">{r[0]}</td><td>{r[1]}</td><td className="text-muted-foreground">{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td><Pill tone={r[5]==="Live"?"success":"warn"}>{r[5]}</Pill></td><td><Pill>Manage</Pill></td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad05", title: "KYC Lifecycle", body: (
      <div className="p-3 space-y-2">
        <div className="font-bold">Vendor KYC Lifecycle</div>
        <div className="grid grid-cols-5 gap-2">
          {[
            ["Applied","8","muted"],
            ["Docs received","5","muted"],
            ["Review","4","warn"],
            ["Approved","42","success"],
            ["Rejected","3","danger"],
          ].map(([s,n,t]:any)=> <Box key={s}><Pill tone={t}>{s}</Pill><div className="font-bold text-base mt-1">{n}</div></Box>)}
        </div>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Vendor</th><th>Stage</th><th>Age</th><th>Owner</th><th>Risk</th></tr></thead>
          <tbody>{[
            ["BuildMart Supplies","Review","2d","Geeta","Low"],
            ["MetroSteel","Docs received","5h","Geeta","Med"],
            ["QuickCement","Approved","-","Auto","Low"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td><Pill tone={r[4]==="Low"?"success":"warn"}>{r[4]}</Pill></td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad06", title: "Revenue & Margin Analytics", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Revenue & Margin</div><Row><Pill tone="accent">By SKU</Pill><Pill>By Vendor</Pill><Pill>By Hub</Pill><Pill>30d ▾</Pill></Row></div>
        <Row>
          <Box className="flex-1"><div className="text-muted-foreground">Gross Revenue</div><div className="font-bold">₹11.8 Cr</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Net Margin</div><div className="font-bold text-green-600">14.2%</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">AOV</div><div className="font-bold">₹38,420</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Repeat rate</div><div className="font-bold">64%</div></Box>
        </Row>
        <Box className="h-32"><div className="text-muted-foreground">Revenue trend</div><div className="flex items-end gap-1 h-20 mt-1">{[40,50,45,60,55,72,68,80,75,90,85,95].map((h,i)=><div key={i} className="flex-1 bg-foreground/70 rounded-t" style={{height:`${h}%`}}/>)}</div></Box>
        <table className="w-full text-left"><thead className="bg-muted"><tr><th className="p-1">SKU</th><th>Units</th><th>Revenue</th><th>Margin</th></tr></thead><tbody>{[
          ["UltraTech PPC","18,420","₹71L","16%"],
          ["TMT 12mm","6,210","₹62L","12%"],
          ["River Sand","4,800T","₹54L","18%"],
        ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td className="font-bold text-green-700">{r[3]}</td></tr>)}</tbody></table>
      </div>
    )
  },
  {
    id: "ad07", title: "Finance · Tally-ready Ledger", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Orders Ledger</div><Row><Btn>Export Tally XML</Btn><Btn primary>Export CSV</Btn><Pill tone="warn">Approval required</Pill></Row></div>
        <Row><Pill tone="accent">Nov 2026</Pill><Pill>All hubs</Pill><Pill>All vendors</Pill></Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Date</th><th>Invoice</th><th>Customer GSTIN</th><th>Vendor</th><th>Gross</th><th>CGST</th><th>SGST</th><th>Net</th></tr></thead>
          <tbody>{Array.from({length:8}).map((_,i)=> <tr key={i} className="border-t"><td className="p-1">{14-i}-Nov</td><td className="font-mono">INV-{88421-i}</td><td className="text-muted-foreground">29ABC…{i}Z5</td><td>ACME Hub</td><td>₹{(40+i)*1000}</td><td>₹{i*900}</td><td>₹{i*900}</td><td className="font-bold">₹{(40+i)*1180}</td></tr>)}</tbody>
        </table>
        <div className="text-right font-bold">Total: ₹4,82,40,000 · CGST ₹38L · SGST ₹38L</div>
      </div>
    )
  },
  {
    id: "ad08", title: "Settings · Pricing & Roles (RBAC)", body: (
      <div className="p-3 space-y-2">
        <div className="font-bold">Platform Settings <Pill tone="danger">Approval gated</Pill></div>
        <Row>
          <Box className="flex-1"><div className="font-medium">Global pricing</div><div>Commission: 8% ▾</div><div>Surge multiplier: 1.0×</div><Btn>Request change</Btn></Box>
          <Box className="flex-1"><div className="font-medium">SLA mode</div>NORMAL · STRICT · RELAXED<Btn primary>Apply</Btn></Box>
        </Row>
        <div className="font-medium">Roles & permissions</div>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Role</th><th>Refunds</th><th>Vendor suspend</th><th>Pricing</th><th>KYC</th></tr></thead>
          <tbody>{[
            ["Super Admin","✓","✓","✓","✓"],
            ["Ops Lead","✓ ≤₹50k","Request","—","✓"],
            ["Support","Request","—","—","Read"],
            ["Finance","—","—","Read","—"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-medium">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad09", title: "Customers (B2B accounts)", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Customers</div><Row><Btn>Export</Btn><Btn primary>+ Add account</Btn></Row></div>
        <Row><Box className="flex-1 bg-muted"><Search className="inline w-3 h-3 mr-1"/> Company, GSTIN, site, contact</Box><Pill>Tier ▾</Pill><Pill>Credit risk ▾</Pill><Pill>Active 30d</Pill></Row>
        <Row>
          <Box className="flex-1"><div className="text-muted-foreground">Active accounts</div><div className="font-bold">1,842</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Credit deployed</div><div className="font-bold">₹14.6 Cr</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Overdue &gt; 30d</div><div className="font-bold text-red-600">₹38L</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Avg LTV</div><div className="font-bold">₹6.2L</div></Box>
        </Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Company</th><th>GSTIN</th><th>Sites</th><th>30-d GMV</th><th>Credit</th><th>Used</th><th>Tier</th><th>Risk</th></tr></thead>
          <tbody>{[
            ["ACME Constructions","29ABC…","5","₹8.4L","₹5.0L","₹3.1L","Gold","Low"],
            ["Prestige Homes","29GHI…","12","₹14.2L","₹15L","₹11L","Gold","Med"],
            ["UrbanNest","29JKL…","1","₹48k","₹1L","₹98k","New","High"],
            ["Sterling Builders","29DEF…","2","₹3.1L","₹3L","₹0","Silver","Low"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-medium">{r[0]}</td><td className="text-muted-foreground">{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td>{r[5]}</td><td><Pill tone={r[6]==="Gold"?"success":r[6]==="New"?"warn":"muted"}>{r[6]}</Pill></td><td><Pill tone={r[7]==="Low"?"success":r[7]==="High"?"danger":"warn"}>{r[7]}</Pill></td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad10", title: "Drivers & Fleet", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Drivers & Fleet</div><Row><Btn>+ Onboard driver</Btn><Btn primary>Assign route</Btn></Row></div>
        <Row>
          <Box className="flex-1"><div className="text-muted-foreground">On duty</div><div className="font-bold">28</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">On delivery</div><div className="font-bold">19</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Idle &gt; 15m</div><div className="font-bold text-yellow-600">4</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Offline / break</div><div className="font-bold">7</div></Box>
          <Box className="flex-1"><div className="text-muted-foreground">Avg trips/day</div><div className="font-bold">11.2</div></Box>
        </Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Driver</th><th>Vehicle</th><th>Hub</th><th>Status</th><th>Current</th><th>Trips</th><th>SLA</th><th>Rating</th></tr></thead>
          <tbody>{[
            ["Ravi K.","KA-01-AB-7820","Whitefield","On delivery","HZ-88431","11/12","92%","4.9★"],
            ["Mahesh D.","KA-03-CD-4421","Whitefield","Returning","—","9/10","95%","4.8★"],
            ["Iqbal R.","KA-02-EF-1180","Hebbal","Offline 9m","HZ-88420","6/8","78%","4.5★"],
            ["Suresh P.","KA-05-XY-3309","Sarjapur","Idle 18m","—","4/6","88%","4.7★"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-medium">{r[0]}</td><td className="font-mono">{r[1]}</td><td>{r[2]}</td><td><Pill tone={r[3]==="On delivery"?"success":r[3].startsWith("Offline")?"danger":"warn"}>{r[3]}</Pill></td><td className="font-mono">{r[4]}</td><td>{r[5]}</td><td>{r[6]}</td><td>{r[7]}</td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad11", title: "Support · Tickets queue", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Support Tickets</div><Row><Pill tone="danger">8 P1</Pill><Pill tone="warn">14 P2</Pill><Pill>33 P3</Pill><Btn primary>Assign next</Btn></Row></div>
        <Row><Box className="flex-1 bg-muted"><Search className="inline w-3 h-3 mr-1"/> Ticket, order, customer</Box><Pill>Unassigned</Pill><Pill>SLA breach</Pill><Pill>Mine</Pill></Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Ticket</th><th>Channel</th><th>Customer</th><th>Reason</th><th>Order</th><th>Age</th><th>Owner</th><th>Status</th></tr></thead>
          <tbody>{[
            ["SUP-2041","WhatsApp","ACME","Short qty","HZ-88301","12m","Anitha","Open"],
            ["SUP-2040","In-app","Prestige","Driver late","HZ-88254","45m","—","Unassigned"],
            ["SUP-2039","Email","UrbanNest","GST invoice","HZ-88122","2h","Geeta","Waiting cust"],
            ["SUP-2035","Call","Sterling","Wrong SKU","HZ-88090","5h","Anitha","Resolved"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-mono">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td className="font-mono">{r[4]}</td><td>{r[5]}</td><td>{r[6]}</td><td><Pill tone={r[7]==="Resolved"?"success":r[7]==="Open"?"danger":"warn"}>{r[7]}</Pill></td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad12", title: "Audit Log", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Audit Log</div><Row><Btn>Export</Btn><Pill tone="accent">Immutable</Pill></Row></div>
        <Row><Box className="flex-1 bg-muted"><Search className="inline w-3 h-3 mr-1"/> Actor, action, entity</Box><Pill>Refunds</Pill><Pill>RBAC</Pill><Pill>Pricing</Pill><Pill>KYC</Pill><Pill>Last 24h ▾</Pill></Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Time</th><th>Actor</th><th>Role</th><th>Action</th><th>Entity</th><th>Before</th><th>After</th><th>2FA</th></tr></thead>
          <tbody>{[
            ["10:22","priya@housizy","Ops Lead","Refund","HZ-88412","—","₹46,551","✓"],
            ["10:18","system","Auto","P1 raised","HZ-88412","Picking","Stuck","—"],
            ["09:55","arjun@housizy","Super Admin","Surge ON","Hub:Hebbal","1.0×","1.5×","✓"],
            ["09:40","geeta@housizy","Ops Lead","KYC approve","BuildMart","Review","Approved","✓"],
          ].map(r=> <tr key={r[0]+r[3]} className="border-t"><td className="p-1">{r[0]}</td><td className="font-mono text-[10px]">{r[1]}</td><td>{r[2]}</td><td className="font-medium">{r[3]}</td><td className="font-mono">{r[4]}</td><td className="text-muted-foreground">{r[5]}</td><td>{r[6]}</td><td>{r[7]}</td></tr>)}</tbody>
        </table>
      </div>
    )
  },
  {
    id: "ad13", title: "Notifications · Broadcast", body: (
      <div className="p-3 space-y-2">
        <div className="flex justify-between"><div className="font-bold">Notifications & Comms</div><Row><Btn>Templates</Btn><Btn primary>+ New broadcast</Btn></Row></div>
        <Row>
          <Box className="flex-1"><div className="font-medium">Compose</div><Box className="bg-muted">Audience: Vendors · Whitefield, Hebbal</Box><Box className="bg-muted">Channel: Push · WhatsApp · Email</Box><Box className="bg-muted h-16">Message: "Surge pricing ON till 8pm. Expect higher order volume."</Box><Row><Btn>Schedule</Btn><Btn primary>Send now</Btn></Row></Box>
          <Box className="w-56"><div className="font-medium">Recent broadcasts</div><div className="text-muted-foreground text-[10px] mt-1">• Festive policy · 1.2k delivered<br/>• Pause Hebbal · 18 vendors<br/>• Net-30 limit raised · 412 buyers</div></Box>
        </Row>
        <table className="w-full text-left">
          <thead className="bg-muted"><tr><th className="p-1">Template</th><th>Channel</th><th>Audience</th><th>Open</th><th>CTR</th></tr></thead>
          <tbody>{[
            ["Order dispatched","Push+WA","Customer","92%","41%"],
            ["SLA breach alert","Push","Ops + Vendor","100%","78%"],
            ["Payout settled","WA+Email","Vendor","88%","22%"],
            ["Credit due reminder","WA+SMS","Customer","81%","34%"],
          ].map(r=> <tr key={r[0]} className="border-t"><td className="p-1 font-medium">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td></tr>)}</tbody>
        </table>
      </div>
    )
  },
];

/* ---------- FLOW CAPTIONS (arrows between screens) ---------- */
const flows: Record<string, string[]> = {
  customer: [
    "Tap Send OTP → verify mobile",
    "Profile saved → unlock catalog",
    "Pick category → browse SKUs",
    "Open SKU → see price & stock",
    "Add to cart → tag to project",
    "Confirm cart → checkout",
    "Pay / use credit → order placed",
    "Auto-routed to nearest hub",
    "Vendor picks stock",
    "Driver dispatched",
    "POD captured → delivered",
    "Auto GST invoice generated",
    "Posted to credit ledger",
    "Reorder or raise ticket",
    "Manage account & prefs",
    "Confirm serviceable pincode",
    "Apply for Net-30 credit",
    "Raise return / support ticket",
    "Rate driver & order",
  ],
  "vendor-m": [
    "Login → load today's queue",
    "Accept order → start picking",
    "Pick complete → QC pack",
    "Assign driver from roster",
    "Dispatch → handover to driver",
    "Driver captures POD",
    "Earnings credited to ledger",
    "Keep KYC & profile current",
    "Triage alerts & SLA risks",
    "Resolve customer disputes",
  ],
  "vendor-d": [
    "Desktop console → bulk ops",
    "Upload CSV → update prices",
    "Manage SKU catalog",
    "Monitor SLA across orders",
    "Reconcile payouts",
    "Manage staff & roles",
    "Search & manage orders",
    "Configure pricing rules",
    "Segment B2B buyers",
    "Resolve returns & disputes",
  ],
  "admin-m": [
    "2FA login → mission control",
    "Triage P1/P2/P3 incidents",
    "Drill into incident → replay",
    "Approve KYC on the go",
    "Push hotfix / pause vendor",
    "Inspect & reassign drivers",
    "Toggle surge & SLA mode",
    "Stay on top of ops alerts",
  ],
  "admin-d": [
    "Mission Control → live ops",
    "Open live map → track fleet",
    "Inspect hubs & vendors",
    "Move KYC through lifecycle",
    "Review revenue & margin",
    "Export Tally ledger",
    "Tune pricing & RBAC",
    "Manage B2B customers & credit",
    "Run fleet & driver ops",
    "Resolve support tickets",
    "Review immutable audit trail",
    "Broadcast comms to ecosystem",
  ],
};

/* ---------- SCREEN EXPLANATIONS (HD: purpose + components on screen) ---------- */
const explain: Record<string, { purpose: string; contains: string[] }> = {
  // Customer Mobile
  c01: { purpose: "Mobile + OTP gate validating buyer identity before catalog access.", contains: ["HOUSIZY wordmark + tagline", "+91 phone input with country flag", "Optional name field", "Send OTP primary CTA", "T&C / Privacy consent footnote"] },
  c02: { purpose: "Onboarding wizard capturing buyer type, GSTIN, sites & credit intent — unlocks B2B pricing.", contains: ["Step indicator (1 of 3)", "Persona chips: Contractor / Builder / Homeowner / Architect", "Company name field", "GSTIN input", "Sites list with + Add site action", "Team invite count", "Net-30 credit limit request", "Continue CTA"] },
  c03: { purpose: "Personalised home feed with reorder shortcuts, hero offer and category grid.", contains: ["Delivery-to address header", "Credit badge", "Search bar (cement/steel/bricks)", "Bulk Saver promo card with CTA", "6-tile category grid", "Trending SKU strip with price"] },
  c04: { purpose: "Faceted search/category results across SKUs.", contains: ["Search query echo", "Serviceable pincode chip", "Sort & Filter dropdowns", "SKU rows: thumb, name, hub stock, MRP + strike, Add button"] },
  c05: { purpose: "Full SKU page with live stock, slab pricing and project tagging.", contains: ["Hero image placeholder", "Product title + ISI / In-stock badges", "Price + GST split", "60-min Express delivery row", "Site tag selector", "Bulk slab pricing table", "Quantity stepper + Add to cart CTA"] },
  c06: { purpose: "Cart auto-tagged to a project/site for cost-coding.", contains: ["Item count header", "Line items with site tag chip", "Subtotal, GST and Total breakdown", "Proceed to checkout CTA"] },
  c07: { purpose: "Checkout with address, slot, payment mode and PO reference.", contains: ["Delivery address row", "Slot row (Express 60 min)", "Payment options: Credit (Net-30), UPI, COD", "PO number field", "Place order CTA with total"] },
  c08: { purpose: "Live six-step order tracker with driver comms.", contains: ["Order ID header", "Live map with driver name", "6-step checklist: Accepted → Picking → Packed → Dispatched → Arriving → Delivered", "Call / WhatsApp driver buttons", "ETA + SLA caption"] },
  c09: { purpose: "Delivered confirmation with GST invoice download.", contains: ["Success tick", "Delivered timestamp + SLA delta", "Invoice card with download PDF action", "Rate order entry point"] },
  c10: { purpose: "Order history with status, reorder and invoice actions.", contains: ["Tabs: All / Open / Delivered / Returns", "Order rows: ID, date, total, status pill", "Reorder & Invoice actions per row"] },
  c11: { purpose: "Sites directory — tie orders & budgets to each project.", contains: ["Site cards: name, pincode, manager", "Spend & open-orders metrics per site", "+ Add site CTA", "Per-site budget bar"] },
  c12: { purpose: "Net-30 credit dashboard: limit, utilisation, statements & payments.", contains: ["Credit limit + available", "Utilisation progress bar", "Due-in-X days banner", "Statements list", "Pay now CTA"] },
  c13: { purpose: "Team management with role-based approval limits.", contains: ["Member rows with avatar, role, approval cap", "Invite member CTA", "Role chips: Admin / Approver / Buyer"] },
  c14: { purpose: "Notifications inbox: SLA, dispatch, payment, approvals.", contains: ["Filter tabs", "Timeline rows with icon, title, time", "Tap-to-deeplink chevron"] },
  c15: { purpose: "Profile, KYC docs, addresses, language & logout.", contains: ["Avatar + name + GSTIN", "KYC document status rows", "Saved addresses", "Language selector", "Logout"] },
  c16: { purpose: "Pincode serviceability gate — filters catalog, pricing & SLA eligibility.", contains: ["Pincode input", "Detect location button", "Hub & ETA preview", "Out-of-zone fallback message"] },
  c17: { purpose: "Net-30 credit application with document upload & e-sign.", contains: ["Requested limit input", "GST, PAN, bank-statement upload tiles", "Director details", "Aadhaar e-sign step", "Submit application CTA"] },
  c18: { purpose: "Returns ticket: damage / shortage / wrong-item with photos & refund mode.", contains: ["Order picker", "Reason chips: Damage / Short / Wrong / Quality", "Photo uploader (up to 5)", "Description box", "Refund destination selector"] },
  c19: { purpose: "Post-delivery rating that powers vendor SLA & payout tier.", contains: ["5-star rating", "Quick tags: On-time / Packaging / Driver", "Free-text feedback", "Submit CTA"] },

  // Vendor Mobile
  v01: { purpose: "Vendor staff login + active hub selection.", contains: ["Staff ID / mobile field", "OTP entry", "Hub picker dropdown", "Login CTA"] },
  v02: { purpose: "Live order queue with SLA countdown rings — accept/decline.", contains: ["Order cards with SLA ring", "Items count + total", "Distance & pincode", "Accept / Decline buttons"] },
  v03: { purpose: "Step-by-step pick → pack → dispatch workflow with scans.", contains: ["Stage tracker", "SKU checklist with barcode scan", "Photo POD capture", "Mark dispatched CTA"] },
  v04: { purpose: "Out-of-stock handler with substitution proposal to buyer.", contains: ["OOS SKU row", "Suggested substitute card", "Notify buyer / Refund actions"] },
  v05: { purpose: "Assigns delivery driver from on-duty roster.", contains: ["Driver list with status & load", "Assign button", "Vehicle + capacity meta"] },
  v06: { purpose: "Quick inventory edit on the warehouse floor.", contains: ["SKU search", "Stock +/− stepper", "Price edit field", "Save & sync CTA"] },
  v07: { purpose: "Daily earnings, payout cycle and deductions.", contains: ["Today GMV tile", "Payout cycle progress", "Deductions list", "Statement link"] },
  v08: { purpose: "Vendor business profile + KYC documents & category coverage.", contains: ["Business name + GSTIN", "FSSAI / Trade license rows", "Category coverage chips", "Bank account masked"] },
  v09: { purpose: "Real-time alerts: SLA risk, low stock, payouts, policy.", contains: ["Severity filter", "Alert rows: type icon, message, time", "Quick action per row"] },
  v10: { purpose: "Disputes workbench: accept/counter/escalate claims with proof photos.", contains: ["Claim list", "Buyer evidence carousel", "Vendor counter-offer field", "Accept / Counter / Escalate buttons"] },

  // Vendor Desktop
  vd01: { purpose: "KPI dashboard: 7-day orders, GMV, SLA hit-rate trends.", contains: ["KPI tiles: Orders, GMV, SLA %, AOV", "7-day trend charts", "Top SKUs table", "Hub performance heatmap"] },
  vd02: { purpose: "Bulk CSV upload to refresh price/stock for thousands of SKUs.", contains: ["Drag-drop CSV zone", "Validation result table", "Diff preview rows", "Commit / Rollback buttons"] },
  vd03: { purpose: "War-room view of every live order & driver.", contains: ["Order grid with status pills", "Live driver list", "SLA-at-risk banner", "Bulk reassign action"] },
  vd04: { purpose: "14-day earnings ledger with Tally export.", contains: ["Date-range picker", "Ledger table: order, GMV, fee, payout", "Export to Tally button", "Reconcile flag"] },
  vd05: { purpose: "Staff users, roles and permission scopes.", contains: ["User table: name, role, hub, status", "Add user modal trigger", "Role matrix"] },
  vd06: { purpose: "Multi-warehouse control: serviceability, capacity, hours.", contains: ["Hub list with toggle", "Pincode coverage editor", "Operating hours grid", "Daily capacity cap"] },
  vd07: { purpose: "Searchable orders table with hub, status & SLA filters.", contains: ["Filter bar (hub, status, date, SLA)", "Sortable order table", "Row drawer for details", "Bulk export CSV"] },
  vd08: { purpose: "Pricing & promotion engine: slabs, pincode, buyer-tier rules.", contains: ["Rule list with priority", "Slab editor", "Pincode-scoped pricing", "Promo code generator"] },
  vd09: { purpose: "Buyer 360: GMV, sites, outstanding & tier per account.", contains: ["Customer search", "Account card: GMV, AOV, tier", "Linked sites table", "Outstanding & credit limit"] },
  vd10: { purpose: "Dispute resolution workbench with evidence and SLA timer.", contains: ["Dispute queue with SLA timer", "Evidence viewer", "Counter-offer composer", "Escalate to admin"] },

  // Admin Mobile
  a01: { purpose: "2FA-protected admin login for on-call response.", contains: ["Email field", "Password field", "2FA code entry", "Biometric unlock prompt"] },
  a02: { purpose: "Mission-control snapshot: live orders, SLA, incidents.", contains: ["KPI tiles: Live orders, SLA %, GMV, Incidents", "Sparklines", "City selector", "Open incidents banner"] },
  a03: { purpose: "Triage feed grouped by P1/P2/P3 severity.", contains: ["Severity tabs", "Incident rows: type, owner, age", "Acknowledge / Escalate actions"] },
  a04: { purpose: "Order drill-down with override, refund or reassign.", contains: ["Order header", "Status timeline", "Override status menu", "Refund composer", "Reassign vendor / driver"] },
  a05: { purpose: "Approve/reject vendor KYC submissions on the go.", contains: ["KYC queue list", "Doc viewer (GST, PAN, FSSAI)", "Approve / Reject / Request-more buttons", "Reason field"] },
  a06: { purpose: "Live map of fleet & hubs from mobile.", contains: ["Map with driver pins", "Hub markers", "Filter chips (active / idle / SLA-risk)", "Pin detail bottom sheet"] },
  a07: { purpose: "Driver live status, route, SLA & reassign from phone.", contains: ["Driver card: name, vehicle, rating", "Current route map", "SLA countdown", "Reassign order button"] },
  a08: { purpose: "2FA-gated controls: SLA mode, surge multiplier, hub pause.", contains: ["SLA mode toggle (Normal/Relaxed)", "Surge multiplier slider", "Hub pause toggles", "2FA confirm modal"] },
  a09: { purpose: "Ops inbox filtered by SLA, KYC, finance, system.", contains: ["Filter chips", "Notification rows with severity", "Mark read / Snooze actions"] },

  // Admin Desktop
  ad01: { purpose: "City-wide live ops grid: orders, SLA, revenue, alerts.", contains: ["Left nav (Ops, Vendors, Customers, Finance, Settings)", "KPI strip", "Live orders table", "Active incidents panel", "City selector"] },
  ad02: { purpose: "Funnel & pipeline analytics across the order lifecycle.", contains: ["Funnel chart: Cart → Checkout → Placed → Delivered", "Conversion % per stage", "Date-range filter", "Drop-off cohort table"] },
  ad03: { purpose: "Live map with playback to replay any delivery route.", contains: ["Full-screen map", "Driver + hub layers", "Time scrubber for playback", "Route detail side panel"] },
  ad04: { purpose: "Warehouse & vendor directory — capacity, SLA, status.", contains: ["Vendor table: name, hubs, SLA, GMV, status", "Filters (city, status, tier)", "Vendor detail drawer", "Suspend / Activate actions"] },
  ad05: { purpose: "KYC lifecycle: submitted → verified → live.", contains: ["Kanban: Submitted / Under-review / Approved / Live", "Card with vendor + docs", "Move-state actions", "SLA age badge"] },
  ad06: { purpose: "Revenue & margin analytics by category, hub and customer.", contains: ["Revenue trend chart", "Category margin bars", "Top customers table", "Cohort retention grid"] },
  ad07: { purpose: "Finance ledger formatted for Tally import.", contains: ["Ledger table: date, account, debit, credit", "Filter by GL", "Reconciliation flag", "Export to Tally button"] },
  ad08: { purpose: "Pricing rules, fee config, RBAC matrix.", contains: ["Platform fee rules", "Surge config", "Role × Permission matrix", "Audit-trail link"] },
  ad09: { purpose: "B2B account 360: credit, sites, GMV, tier, risk.", contains: ["Account header with tier", "Credit utilisation chart", "Linked sites map", "Risk score & flags", "GMV trend"] },
  ad10: { purpose: "Fleet ops: live driver status, utilisation, SLA, rating.", contains: ["Driver table with status", "Utilisation heatmap by hour", "SLA breach list", "Rating distribution chart"] },
  ad11: { purpose: "Omnichannel support queue with SLA-aware routing.", contains: ["Ticket queue (chat/email/call)", "SLA timer per ticket", "Agent assignment", "Macros & canned replies"] },
  ad12: { purpose: "Immutable audit log of sensitive actions with 2FA proof.", contains: ["Log table: actor, action, target, time", "2FA proof column", "Filter by module", "Export signed CSV"] },
  ad13: { purpose: "Targeted broadcasts across push, WhatsApp, SMS, email.", contains: ["Audience segment builder", "Channel checkboxes", "Message composer with preview", "Schedule + send"] },
};

/* ---------- FLOW SPEC · MOBILE (Common Login + Customer + Vendor per uploaded flow) ---------- */
const Check = ({ on = false, locked = false }: { on?: boolean; locked?: boolean }) => (
  <span className={`inline-block w-3.5 h-3.5 border ${on ? "bg-neutral-800 border-neutral-800" : "border-neutral-500"} ${locked ? "opacity-60" : ""} align-middle mr-1`}>
    {on && <span className="block text-white text-[10px] leading-[12px] text-center">✓</span>}
  </span>
);

const flowMobileScreens = [
  {
    id: "f01", title: "Common Login (role tabs)", body: (
      <div className="space-y-3 pt-6">
        <div className="text-center font-bold">Login</div>
        <Row><Pill tone="accent">Admin</Pill><Pill>Vendor</Pill><Pill>Delivery</Pill><Pill>Customer</Pill></Row>
        <Box><div className="text-[10px] text-muted-foreground">Email / Phone</div><Bar w="80%"/></Box>
        <Box><div className="text-[10px] text-muted-foreground">Password</div><Bar w="60%"/></Box>
        <Btn primary>Login</Btn>
        <div className="text-[10px] text-center text-muted-foreground">New customer? <span className="underline">Sign Up</span></div>
      </div>
    )
  },
  {
    id: "f02", title: "Customer Sign Up", body: (
      <div className="space-y-2">
        <div className="font-bold">Create your account</div>
        <Box><div className="text-[10px] text-muted-foreground">Full Name</div><Bar w="70%"/></Box>
        <Box><div className="text-[10px] text-muted-foreground">Phone</div><Bar w="60%"/></Box>
        <Box><div className="text-[10px] text-muted-foreground">Email</div><Bar w="75%"/></Box>
        <Box><div className="text-[10px] text-muted-foreground">Password</div><Bar w="50%"/></Box>
        <Box><div className="text-[10px] text-muted-foreground">Address</div><Bar w="90%"/><Bar w="60%"/></Box>
        <Box><div className="text-[10px] text-muted-foreground">Pincode</div><span className="font-mono">______</span></Box>
        <Btn primary>Create account</Btn>
      </div>
    )
  },
  {
    id: "f03", title: "Customer Home · Product Types", body: (
      <div className="space-y-2">
        <div className="flex justify-between"><div className="font-bold">Hi Ramesh</div><Pill>560066</Pill></div>
        <Box className="bg-muted"><Search className="inline w-3 h-3 mr-1"/> Search products</Box>
        <div className="font-semibold">Product Types</div>
        <div className="grid grid-cols-2 gap-2">
          {["Cement","Steel","Bricks","Sand","Paint","Tiles"].map(t => (
            <Box key={t} className="text-center"><div className="h-14 bg-muted rounded mb-1"/><div className="font-medium">{t}</div></Box>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "f04", title: "Product Type Listing (pincode → vendor stock)", body: (
      <div className="space-y-2">
        <div className="font-bold">Cement</div>
        <Row><Pill tone="accent">Pincode 560066</Pill><Pill>Sort ▾</Pill></Row>
        <div className="text-[10px] text-muted-foreground">Showing inventory from vendors serving your pincode</div>
        {[
          ["UltraTech PPC 50kg","Vendor A","₹385","18"],
          ["ACC Gold 50kg","Vendor B","₹372","6"],
          ["Ambuja PPC 50kg","Vendor A","₹378","2 — low"],
          ["Birla A1 50kg","Vendor C","₹390","12"],
        ].map(([n,v,p,q]) => (
          <Box key={n}><Row><div className="w-10 h-10 bg-muted rounded"/><div className="flex-1"><div className="font-medium">{n}</div><div className="text-muted-foreground text-[10px]">{v} · stock {q}</div><div className="font-bold">{p}</div></div><Pill tone="success">View</Pill></Row></Box>
        ))}
      </div>
    )
  },
  {
    id: "f05", title: "Single Product Page", body: (
      <div className="space-y-2">
        <div className="h-28 bg-muted rounded"/>
        <Row><div className="w-10 h-10 bg-muted rounded"/><div className="w-10 h-10 bg-muted rounded"/><div className="w-10 h-10 bg-muted rounded"/></Row>
        <div className="font-bold">UltraTech PPC Cement 50kg</div>
        <div className="text-muted-foreground text-[10px]">Manufacturer: UltraTech · Vendor A</div>
        <div className="font-bold text-base">₹385</div>
        <Box><div className="text-[10px] text-muted-foreground">Max available qty: 18</div></Box>
        <Box><div className="text-[10px] text-muted-foreground">Quantity</div><Row><Btn>−</Btn><div className="flex-1 text-center font-bold">3</div><Btn>+</Btn></Row></Box>
        <Btn primary>Place Order</Btn>
      </div>
    )
  },
  {
    id: "f06", title: "Customer Orders + Status", body: (
      <div className="space-y-2">
        <div className="font-bold">My Orders</div>
        {[
          ["#1042","UltraTech ×3","Placed"],
          ["#1039","ACC Gold ×5","Packed"],
          ["#1035","TMT 12mm ×10","Out for Delivery"],
          ["#1028","Sand 1T","Delivered"],
        ].map(([id,it,st]) => (
          <Box key={id}>
            <div className="flex justify-between"><span className="font-mono">{id}</span><Pill tone={st==="Delivered"?"success":"accent"}>{st}</Pill></div>
            <div className="text-muted-foreground text-[10px]">{it}</div>
            <Row className="mt-1 text-[10px]">
              <span><Check on />Placed</span>
              <span><Check on={st!=="Placed"} />Packed</span>
              <span><Check on={st==="Out for Delivery"||st==="Delivered"} />Out</span>
              <span><Check on={st==="Delivered"} />Delivered</span>
            </Row>
          </Box>
        ))}
      </div>
    )
  },
  {
    id: "f07", title: "Vendor · Manage Inventory", body: (
      <div className="space-y-2">
        <div className="flex justify-between"><div className="font-bold">My Inventory</div><Btn primary>+ Add Product</Btn></div>
        <Box className="bg-muted"><Search className="inline w-3 h-3 mr-1"/> Search products in catalogue</Box>
        {[
          ["UltraTech PPC 50kg","Cement","18"],
          ["ACC Gold 50kg","Cement","6"],
          ["TMT 12mm","Steel","42"],
          ["Red Brick","Bricks","800"],
        ].map(([n,t,q]) => (
          <Box key={n}>
            <div className="flex justify-between"><div><div className="font-medium">{n}</div><div className="text-muted-foreground text-[10px]">{t}</div></div><div className="text-right"><div className="font-bold">Qty {q}</div><Pill>Update</Pill></div></div>
          </Box>
        ))}
      </div>
    )
  },
  {
    id: "f08", title: "Vendor · Add Product (modal)", body: (
      <div className="space-y-2 pt-2">
        <div className="font-bold">Add Product to my inventory</div>
        <div className="text-muted-foreground text-[10px]">Pick from admin product catalogue</div>
        <Box><div className="text-[10px] text-muted-foreground">Product</div>UltraTech PPC 50kg ▾</Box>
        <Box><div className="text-[10px] text-muted-foreground">Manufacturer (auto)</div>UltraTech</Box>
        <Box><div className="text-[10px] text-muted-foreground">Cost (auto)</div>₹385</Box>
        <Box><div className="text-[10px] text-muted-foreground">Quantity available</div><span className="font-mono">__</span></Box>
        <Row><Btn>Cancel</Btn><div className="flex-1"><Btn primary>Save</Btn></div></Row>
      </div>
    )
  },
  {
    id: "f09", title: "Vendor · Update Qty (modal)", body: (
      <div className="space-y-2 pt-2">
        <div className="font-bold">Update Quantity</div>
        <Box><div className="font-medium">UltraTech PPC 50kg</div><div className="text-muted-foreground text-[10px]">Current stock · 18</div></Box>
        <Box><div className="text-[10px] text-muted-foreground">New quantity</div><Row><Btn>−</Btn><div className="flex-1 text-center font-bold">22</div><Btn>+</Btn></Row></Box>
        <Row><Btn>Cancel</Btn><div className="flex-1"><Btn primary>Save</Btn></div></Row>
      </div>
    )
  },
  {
    id: "f10", title: "Vendor · Manage Orders (Packed)", body: (
      <div className="space-y-2">
        <div className="font-bold">Incoming Orders</div>
        <div className="text-[10px] text-muted-foreground">Tick Packed to auto-assign a delivery agent. Once ticked it cannot be unticked.</div>
        {[
          ["#1042","UltraTech ×3","new",false],
          ["#1039","ACC Gold ×5","packed",true],
          ["#1035","TMT 12mm ×10","dispatched",true],
        ].map(([id,it,st,packed]:any) => (
          <Box key={id}>
            <div className="flex justify-between"><span className="font-mono">{id}</span><Pill tone={st==="dispatched"?"success":"accent"}>{st}</Pill></div>
            <div className="text-muted-foreground text-[10px]">{it}</div>
            <Row className="mt-1 text-[11px] items-center">
              <span><Check on={packed} locked={packed} />Packed {packed && <span className="text-[9px] text-muted-foreground">(locked)</span>}</span>
              {packed && <Pill tone="success">Agent assigned</Pill>}
            </Row>
          </Box>
        ))}
      </div>
    )
  },
];

/* ---------- FLOW SPEC · ADMIN DESKTOP (per uploaded flow) ---------- */
const flowAdminScreens = [
  {
    id: "fa01", title: "Admin · Manage Products", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Products"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center"><div className="font-bold text-sm">Products</div><Row><Btn>+ Create Product Type</Btn><Btn primary>+ Create Product</Btn></Row></div>
          <Row><Pill tone="accent">All</Pill><Pill>Cement</Pill><Pill>Steel</Pill><Pill>Bricks</Pill><Pill>Sand</Pill></Row>
          <Box>
            <div className="grid grid-cols-[1fr_120px_100px_100px_120px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono pb-1 border-b border-dashed">
              <span>Name</span><span>Type</span><span>Mfr</span><span>Cost</span><span>Actions</span>
            </div>
            {[
              ["UltraTech PPC 50kg","Cement","UltraTech","₹385"],
              ["ACC Gold 50kg","Cement","ACC","₹372"],
              ["TMT 12mm","Steel","Tata","₹970"],
              ["Red Brick","Bricks","Local","₹8"],
            ].map(([n,t,m,c]) => (
              <div key={n} className="grid grid-cols-[1fr_120px_100px_100px_120px] gap-2 py-1.5 border-b border-dashed text-[11px] items-center">
                <span>{n}</span><span>{t}</span><span>{m}</span><span>{c}</span>
                <Row><Pill>Edit</Pill><Pill>Delete</Pill></Row>
              </div>
            ))}
          </Box>
        </div>
      </div>
    )
  },
  {
    id: "fa02", title: "Admin · Create / Edit Product (form)", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Products"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-2 max-w-md">
          <div className="font-bold">Create Product</div>
          <Box><div className="text-[10px] text-muted-foreground">Name</div><Bar w="80%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Product Type</div>Cement ▾</Box>
          <Box><div className="text-[10px] text-muted-foreground">Manufacturer</div><Bar w="60%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Cost</div>₹ ___</Box>
          <Box><div className="text-[10px] text-muted-foreground flex items-center gap-1"><Upload className="w-3 h-3"/> Image</div><div className="h-20 bg-muted rounded mt-1"/></Box>
          <Row><Btn>Cancel</Btn><div className="flex-1"><Btn primary>Save Product</Btn></div></Row>
        </div>
      </div>
    )
  },
  {
    id: "fa03", title: "Admin · Manage Vendors", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Vendors"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between"><div className="font-bold text-sm">Vendors</div><Btn primary>+ Create Vendor</Btn></div>
          <Box>
            <div className="grid grid-cols-[1fr_120px_140px_120px_100px_120px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono pb-1 border-b border-dashed">
              <span>Name</span><span>GST</span><span>Phone</span><span>Pincode</span><span>Status</span><span>Actions</span>
            </div>
            {[
              ["Vendor A","29ABCDE…","9876543210","560066","Active"],
              ["Vendor B","29FGHIJ…","9876512345","560024","Active"],
              ["Vendor C","29KLMNO…","9876598765","560100","Inactive"],
            ].map(([n,g,p,pc,s]) => (
              <div key={n} className="grid grid-cols-[1fr_120px_140px_120px_100px_120px] gap-2 py-1.5 border-b border-dashed text-[11px] items-center">
                <span>{n}</span><span>{g}</span><span>{p}</span><span>{pc}</span>
                <Pill tone={s==="Active"?"success":"muted"}>{s}</Pill>
                <Row><Pill>Edit</Pill><Pill>Toggle</Pill></Row>
              </div>
            ))}
          </Box>
        </div>
      </div>
    )
  },
  {
    id: "fa04", title: "Admin · Create / Edit Vendor", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Vendors"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-2 max-w-md">
          <div className="font-bold">Create Vendor</div>
          <Box><div className="text-[10px] text-muted-foreground">Name</div><Bar w="70%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Address</div><Bar w="90%"/><Bar w="60%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3"/> Location (lat/long)</div><Bar w="50%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">GST</div><Bar w="60%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Phone</div><Bar w="50%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Email</div><Bar w="60%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Password</div><Bar w="40%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Status</div><Row><Pill tone="accent">● Active</Pill><Pill>○ Inactive</Pill></Row></Box>
          <Row><Btn>Cancel</Btn><div className="flex-1"><Btn primary>Save Vendor</Btn></div></Row>
        </div>
      </div>
    )
  },
  {
    id: "fa05", title: "Admin · View Orders (All + Vendor-wise)", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Orders"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center"><div className="font-bold text-sm">Orders</div><Row><Pill tone="accent">All Vendors</Pill><Pill>Vendor A</Pill><Pill>Vendor B</Pill><Pill>Vendor C</Pill></Row></div>
          <Box>
            <div className="grid grid-cols-[100px_1fr_120px_120px_120px_120px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono pb-1 border-b border-dashed">
              <span>Order</span><span>Customer</span><span>Vendor</span><span>Amount</span><span>Status</span><span>Agent</span>
            </div>
            {[
              ["#1042","Ramesh K.","Vendor A","₹1,155","Placed","—"],
              ["#1039","Sunita P.","Vendor B","₹1,860","Packed","Ravi"],
              ["#1035","Arif M.","Vendor A","₹9,700","Out","Manoj"],
              ["#1028","Ramesh K.","Vendor C","₹2,800","Delivered","Imran"],
            ].map(r => (
              <div key={r[0]} className="grid grid-cols-[100px_1fr_120px_120px_120px_120px] gap-2 py-1.5 border-b border-dashed text-[11px] items-center">
                <span className="font-mono">{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
                <Pill tone={r[4]==="Delivered"?"success":"accent"}>{r[4]}</Pill><span>{r[5]}</span>
              </div>
            ))}
          </Box>
        </div>
      </div>
    )
  },
  {
    id: "fa06", title: "Admin · Manage Delivery Partner", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Delivery Partner"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-3">
          <div className="flex justify-between"><div className="font-bold text-sm">Delivery Partners</div><Btn primary>+ Add Partner</Btn></div>
          <Box>
            <div className="grid grid-cols-[1fr_140px_140px_120px_100px_120px] gap-2 text-[10px] uppercase tracking-wider text-muted-foreground font-mono pb-1 border-b border-dashed">
              <span>Name</span><span>Phone</span><span>Vehicle</span><span>Pincode</span><span>Status</span><span>Actions</span>
            </div>
            {[
              ["Ravi K.","9988776655","KA-01 AB 1234","560066","Available"],
              ["Manoj S.","9988711122","KA-05 CD 5678","560024","On trip"],
              ["Imran A.","9988744333","KA-09 EF 9012","560100","Offline"],
            ].map(r => (
              <div key={r[0]} className="grid grid-cols-[1fr_140px_140px_120px_100px_120px] gap-2 py-1.5 border-b border-dashed text-[11px] items-center">
                <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span>
                <Pill tone={r[4]==="Available"?"success":r[4]==="Offline"?"muted":"accent"}>{r[4]}</Pill>
                <Row><Pill>Edit</Pill><Pill>Remove</Pill></Row>
              </div>
            ))}
          </Box>
        </div>
      </div>
    )
  },
  {
    id: "fa07", title: "Admin · Create Delivery API", body: (
      <div className="grid grid-cols-[160px_1fr] h-full">
        <div className="border-r border-dashed p-3 space-y-2 text-[11px]">
          <div className="font-bold">Admin</div>
          {["Products","Vendors","Orders","Delivery Partner","Delivery API"].map(x => <Box key={x} className={x==="Delivery API"?"bg-foreground text-background":""}>{x}</Box>)}
        </div>
        <div className="p-4 space-y-2 max-w-lg">
          <div className="font-bold">Create Delivery API integration</div>
          <div className="text-muted-foreground text-[11px]">Used to auto-assign 3rd-party delivery when no in-house agent is free.</div>
          <Box><div className="text-[10px] text-muted-foreground">Provider name</div><Bar w="60%"/></Box>
          <Box><div className="text-[10px] text-muted-foreground">Base URL</div><span className="font-mono text-[11px]">https://api.provider.com/v1</span></Box>
          <Box><div className="text-[10px] text-muted-foreground">API Key</div><span className="font-mono">••••••••••••</span></Box>
          <Box><div className="text-[10px] text-muted-foreground">Auth type</div><Row><Pill tone="accent">● Bearer</Pill><Pill>○ Basic</Pill><Pill>○ HMAC</Pill></Row></Box>
          <Box><div className="text-[10px] text-muted-foreground">Webhook URL (status callback)</div><span className="font-mono text-[11px]">/api/delivery/webhook</span></Box>
          <Box><div className="text-[10px] text-muted-foreground">Status</div><Row><Pill tone="accent">● Active</Pill><Pill>○ Inactive</Pill></Row></Box>
          <Row><Btn>Test connection</Btn><div className="flex-1"><Btn primary>Save integration</Btn></div></Row>
        </div>
      </div>
    )
  },
];

const Arrow = ({ caption, step, compact = false }: { caption: string; step: number; compact?: boolean }) => {
  // Align arrow vertically to the middle of the frame (not the whole card with caption).
  // Phone frame height = 860px → center at 430px. Desktop frame height = 600px → center at 300px.
  // Subtract ~half the arrow block height (~50px) for visual centering.
  const topOffset = compact ? 250 : 380;
  return (
    <div className={`flex flex-col items-center shrink-0 px-2 self-start ${compact ? "w-[140px]" : "w-[200px]"}`} style={{ marginTop: `${topOffset}px` }}>
      <div className="flex items-center w-full gap-0">
        <div className="flex-1 h-0 border-t-[3px] border-dashed border-primary opacity-70" />
        <div className="bg-primary text-primary-foreground rounded-full px-3 py-2 shadow-xl flex items-center gap-1.5">
          <span className="text-[10px] font-black opacity-80">{step}</span>
          <ArrowRight size={compact ? 18 : 22} strokeWidth={3} />
        </div>
        <div className="flex-1 h-0 border-t-[3px] border-dashed border-primary opacity-70" />
      </div>
      <div className={`mt-2 text-center font-bold bg-primary text-primary-foreground rounded-lg leading-snug shadow-md ${compact ? "text-[10px] px-2 py-1 max-w-[130px]" : "text-[11px] px-3 py-1.5 max-w-[170px]"}`}>
        {caption}
      </div>
    </div>
  );
};

/* ---------- FLOW SPEC captions + explanations ---------- */
flows["flow-m"] = [
  "Pick role → log in",
  "New customer signs up",
  "Browse Product Types",
  "Pincode filters vendor stock",
  "Open product → Place Order",
  "Track status checkboxes",
  "Vendor opens inventory",
  "Add product from catalogue",
  "Update qty when restocked",
  "Tick Packed → auto-assign agent",
];
flows["flow-d"] = [
  "Manage products & types",
  "Create / Edit product form",
  "List & toggle vendors",
  "Create / Edit vendor",
  "View orders · filter by vendor",
  "Manage delivery partners",
  "Wire up 3rd-party delivery API",
];

Object.assign(explain, {
  f01: { purpose: "Single login screen with role tabs (Admin / Vendor / Delivery / Customer); only customers see Sign Up.", contains: ["Role tab strip", "Email / Phone field", "Password field", "Login CTA", "Sign Up link (customer only)"] },
  f02: { purpose: "Customer self-serve registration creating the buyer account used at checkout.", contains: ["Full Name", "Phone", "Email", "Password", "Address (multi-line)", "Pincode", "Create account CTA"] },
  f03: { purpose: "Customer home — browse the platform via Product Types (managed by admin).", contains: ["Greeting + active pincode chip", "Search bar", "Product Types grid (cement, steel, bricks, sand, paint, tiles)"] },
  f04: { purpose: "Listing of every product of the chosen type whose vendor serves the customer's pincode.", contains: ["Type header", "Pincode chip + sort", "Product rows: name, vendor, price, available qty", "View action per row"] },
  f05: { purpose: "Single product detail with images, manufacturer, vendor, price and a quantity capped at vendor stock.", contains: ["Hero image + thumbnails", "Name, manufacturer, vendor", "Price", "Max available qty caption", "Quantity stepper (≤ max)", "Place Order CTA"] },
  f06: { purpose: "Customer orders list with the 4-step status checklist (Placed → Packed → Out → Delivered).", contains: ["Order rows: id, items, status pill", "Inline 4-step checkbox timeline"] },
  f07: { purpose: "Vendor inventory = join of admin product catalogue and this vendor's stock rows.", contains: ["+ Add Product CTA", "Catalogue search", "Inventory rows: name, type, qty, Update action"] },
  f08: { purpose: "Add Product modal — pick from admin catalogue, manufacturer & cost pre-fill, vendor only enters qty.", contains: ["Product dropdown (catalogue)", "Manufacturer (read-only)", "Cost (read-only)", "Quantity input", "Cancel / Save"] },
  f09: { purpose: "Update Quantity modal used when the vendor restocks an existing line.", contains: ["Product summary", "Current stock", "New quantity stepper", "Cancel / Save"] },
  f10: { purpose: "Order queue with the locked Packed checkbox — ticking it triggers automatic delivery-agent assignment and cannot be undone.", contains: ["Incoming orders list", "Status pill per order", "Packed checkbox (locks after tick)", "Agent-assigned indicator"] },

  fa01: { purpose: "Master products console: list, filter by Product Type, and launch Create Product / Create Product Type.", contains: ["Left admin nav", "Create Product Type button", "Create Product button", "Type filter chips", "Products table: Name, Type, Manufacturer, Cost, Edit/Delete"] },
  fa02: { purpose: "Create / Edit Product form — the catalogue entry vendors will pick from.", contains: ["Name", "Product Type dropdown", "Manufacturer", "Cost", "Image upload", "Save / Cancel"] },
  fa03: { purpose: "Vendors directory with Active / Inactive status toggle.", contains: ["+ Create Vendor", "Vendors table: Name, GST, Phone, Pincode, Status, Edit/Toggle"] },
  fa04: { purpose: "Create / Edit Vendor form — onboards a new seller and seeds their login.", contains: ["Name", "Address", "Location (lat/long)", "GST", "Phone", "Email", "Password", "Active / Inactive radio"] },
  fa05: { purpose: "Orders console across the platform with vendor-wise filter.", contains: ["All Vendors + per-vendor filter chips", "Orders table: id, customer, vendor, amount, status, agent"] },
  fa06: { purpose: "Manage in-house Delivery Partners (agents) — the pool used by the auto-assign on vendor Packed tick.", contains: ["+ Add Partner", "Partners table: name, phone, vehicle, pincode, status, Edit/Remove"] },
  fa07: { purpose: "Configure a 3rd-party delivery API used as fallback when no in-house agent is free.", contains: ["Provider name", "Base URL", "API key", "Auth type (Bearer/Basic/HMAC)", "Webhook URL", "Active toggle", "Test connection / Save"] },
});

/* ---------- HUB ---------- */
const TABS = [
  { id: "customer", label: "Customer Mobile", count: customerScreens.length, screens: customerScreens, frame: "phone" as const, prefix: "CUSTOMER" },
  { id: "vendor-m", label: "Vendor Mobile", count: vendorMobileScreens.length, screens: vendorMobileScreens, frame: "phone" as const, prefix: "VENDOR · MOBILE" },
  { id: "vendor-d", label: "Vendor Desktop", count: vendorDesktopScreens.length, screens: vendorDesktopScreens, frame: "desktop" as const, prefix: "VENDOR · DESKTOP" },
  { id: "admin-m", label: "Admin Mobile", count: adminMobileScreens.length, screens: adminMobileScreens, frame: "phone" as const, prefix: "ADMIN · MOBILE" },
  { id: "admin-d", label: "Admin Desktop", count: adminDesktopScreens.length, screens: adminDesktopScreens, frame: "desktop" as const, prefix: "ADMIN · DESKTOP" },
  { id: "flow-m", label: "Flow Spec · Mobile", count: flowMobileScreens.length, screens: flowMobileScreens, frame: "phone" as const, prefix: "FLOW · MOBILE" },
  { id: "flow-d", label: "Flow Spec · Admin", count: flowAdminScreens.length, screens: flowAdminScreens, frame: "desktop" as const, prefix: "FLOW · ADMIN" },
];

function WireframeHub() {
  const [tab, setTab] = useState("customer");
  const total = TABS.reduce((s, t) => s + t.count, 0);
  const active = TABS.find((t) => t.id === tab)!;
  const captions = flows[active.id] ?? [];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-baseline justify-between flex-wrap gap-3">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-muted-foreground">HOUSIZY · STATIC WIREFRAMES</div>
              <h1 className="text-2xl font-bold">All Screens — 5 Apps · {total} Screens</h1>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 bg-muted rounded">60-min SLA</span>
              <span className="px-2 py-1 bg-muted rounded">Net-30 Credit</span>
              <span className="px-2 py-1 bg-muted rounded">GST Invoicing</span>
              <span className="px-2 py-1 bg-accent text-accent-foreground rounded font-medium">B2B Construction</span>
            </div>
          </div>
          <nav className="flex gap-1 mt-4 flex-wrap">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition ${tab === t.id ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
              >
                {t.label} <span className="opacity-60">· {t.count}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">{active.label}</h2>
          <p className="text-sm text-muted-foreground">{active.count} screens · arrows show the user journey between screens</p>
        </div>
        <div className="flex flex-wrap items-start gap-y-12">
          {active.screens.map((s, i) => {
            const id = `${String(i + 1).padStart(2, "0")} · ${active.prefix} · ${s.id}`;
            const frame = active.frame === "phone" ? (
              <PhoneFrame title={id} subtitle={s.title}>{s.body}</PhoneFrame>
            ) : (
              <DesktopFrame title={id} subtitle={s.title}>{s.body}</DesktopFrame>
            );
            const isLast = i === active.screens.length - 1;
            const cardWidth = active.frame === "phone" ? "w-[420px]" : "w-[860px]";
            return (
              <div key={s.id} className="flex items-stretch">
                <div className={`flex flex-col ${cardWidth}`}>
                  {frame}
                  <div className="mt-3 rounded-lg border border-border bg-muted/40 px-3 py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">{i + 1}</span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{s.id} · {s.title}</span>
                    </div>
                    <p className="text-[12px] leading-snug text-foreground mb-2">{explain[s.id]?.purpose ?? "—"}</p>
                    {explain[s.id]?.contains && (
                      <div>
                        <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mb-1">On this screen</div>
                        <ul className="text-[11px] leading-snug text-foreground/80 list-disc pl-4 space-y-0.5">
                          {explain[s.id].contains.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {!isLast && <Arrow caption={captions[i] ?? "next step"} step={i + 1} compact={active.frame === "desktop"} />}
              </div>
            );
          })}
        </div>
      </main>


      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Static wireframe spec · derived from HOUSIZY Platform Client Presentation Guide · arrows = user flow
      </footer>
    </div>
  );
}
