export type PartnerDef = {
  slug: string;
  /** Vietnamese display title */
  titleVi: string;
  subtitle: string;
  /** Short paragraph for the card body */
  description: string;
  /** Salon context — why we chose this partner */
  detailVi: string;
  tags: string[];
  imageSrc: string;
  imageAltVi: string;
};

/**
 * Representative imagery for each partner category — replace with brand-approved assets when licensed.
 */
export const partnersDetailed: PartnerDef[] = [
  {
    slug: "b3",
    titleVi: "Brazilian Bond Builder — B³",
    subtitle: "Công thức phục hồi sợi tóc",
    description:
      "Dòng xử lý bảo vệ cầu liên sulfua trong keratin, giảm đứt gãy khi tẩy, nhuộm hoặc uốn.",
    detailVi:
      "Salon sử dụng B³ trong các bước làm nhạt màu mạnh hoặc nhuộm cần khóa ẩm — bạn sẽ cảm nhận tóc mềm, đàn hồi hơn ngay sau gội xả.",
    tags: ["Phục hồi cấu trúc", "Phù hợp bleaching / color"],
    imageSrc:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=960&q=80",
    imageAltVi: "Sản phẩm và dụng cụ làm đẹp tóc trong không gian salon",
  },
  {
    slug: "milbon",
    titleVi: "Milbon Professional",
    subtitle: "Chuẩn salon hiện đại của Nhật",
    description:
      "Điều trị Glossing & các dòng dưỡng chuyên sâu được thiết kế theo độ và tình trạng tóc châu Á.",
    detailVi:
      "Đội ngũ chọn serum và mask đúng dòng trong suốt dịch vụ để không gây “nặng tóc” — kết quả bóng, mềm nhưng vẫn bay.",
    tags: ["Kết cấu theo salon Nhật", "Điều trị Glossing"],
    imageSrc:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=960&q=80",
    imageAltVi: "Stylist chăm sóc và tạo kiểu tóc trong salon",
  },
  {
    slug: "pro-color",
    titleVi: "Dòng nhuộm chuyên nghiệp",
    subtitle: "Pigment tinh chỉnh tông",
    description:
      "Pha chế theo chỉnh sửa melanin thật của bạn — tránh được lệch xanh hay đồng không mong muốn.",
    detailVi:
      "Trước khi bắt đầu, stylist sẽ soi và thử chỉnh ánh sạng/ngả nền; mỗi lần nhuộm đều ghi nhật ký để lần sau tái hiện màu ổn định.",
    tags: ["Soi và thử chỉnh tông", "Nhật ký màu theo khách"],
    imageSrc:
      "https://images.unsplash.com/photo-1595476103310-eb0e30d08928?auto=format&fit=crop&w=960&q=80",
    imageAltVi: "Bảng màu nhuộm và công cụ pha trộn tại salon",
  },
  {
    slug: "styling-care",
    titleVi: "Chăm sóc & styling sau dịch vụ",
    subtitle: "Giữ độ bóng và nếp tại nhà",
    description:
      "Kết hợp dầu nhẹ và xịt bọt khi blow-dry trong salon để xác nhận tay nghiệp về home care.",
    detailVi:
      "Bạn không chỉ “xịt thử” một lần: chúng tôi hướng dẫn lượng, thời điểm gội và cách tái styling cho tới lần hẹn gội tái căng.",
    tags: ["Home care được hướng dẫn", "Sản phẩm bán lẻ được chọn lọc"],
    imageSrc:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=960&q=80",
    imageAltVi: "Máy sấy và tay nghiệp tạo kiểu tóc tại chỗ",
  },
];
