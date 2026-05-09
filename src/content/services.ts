export type ServiceThumbnail = {
  src: string;
  alt: string;
};

export type ServiceDef = {
  n: string;
  titleVi: string;
  titleEn: string;
  summary: string;
  detail: string;
  highlights: string[];
  /** Four preview images — replace `src` with salon photos in `public/` when ready */
  thumbnails: readonly [ServiceThumbnail, ServiceThumbnail, ServiceThumbnail, ServiceThumbnail];
};

/** Picsum seeds keep each thumb stable across builds */
const img = (
  seed: string,
  alt: string,
): ServiceThumbnail => ({
  src: `https://picsum.photos/seed/${seed}/400/400`,
  alt,
});

export const servicesDetailed: readonly ServiceDef[] = [
  {
    n: "1",
    titleVi: "Cắt thiết kế",
    titleEn: "DESIGN CUT",
    summary:
      "Stylist đồng hành đo chất tóc, khung mặt và thói quen tạo kiểu tại nhà để đề xuất kiểu cắt thật «của bạn».",
    detail:
      "Chúng tôi phối chiều dài mái, chiều dài vai và độ nhọn chân tóc theo nhịp của khuôn mặt. Trước khi cắt, bạn được xem sketch nhanh về các lựa chọn và thời gian chỉnh tỉa định kỳ để luôn giữ form đẹp nhất.",
    highlights: [
      "Tư vấn silhouette & layering theo mái + chất tóc",
      "Cắt khô và cắt ướt kết hợp để độ nhẹ được kiểm soát",
      "Hướng dẫn sấy tay / dùng sản phẩm để tái hiện form tại nhà",
    ],
    thumbnails: [
      img("tran-cut-a", "Cắt layer nữ"),
      img("tran-cut-b", "Cắt pixie và texturing"),
      img("tran-cut-c", "Cắt nam classic fade"),
      img("tran-cut-d", "Tỉa tạo bounce"),
    ],
  },
  {
    n: "2",
    titleVi: "Nhuộm tóc",
    titleEn: "HAIR COLOR",
    summary:
      "Từ tông cổ điển đến balayage, shadow root hay fashion tone — báo đúng nhịch độ vàng / lệch của tóc bạn để vào màu an toàn, bền và mềm tay chạm.",
    detail:
      "Salon chỉ làm sau khi thống nhất mức tẩy, số khối toner và chi phí. Chúng tôi ưu tiên dòng màu bảo vệ sợi tóc, test strand khi sẵn và chăm sóc sau nhuộm để vàng chậm và tóc vẫn mượt.",
    highlights: [
      "So tông với làn da & gu trang điểm hằng ngày của bạn",
      "Điều phối tẩy nồng độ và dưỡng song song trong mùa kẽm",
      "Gói dưỡng lạnh / glaze giữ gloss sau 2 tuần",
    ],
    thumbnails: [
      img("tran-color-a", "Nhuộm nâu lạnh"),
      img("tran-color-b", "Balayage tự nhiên"),
      img("tran-color-c", "Toner beige"),
      img("tran-color-d", "Nhuộm fashion tone"),
    ],
  },
  {
    n: "3",
    titleVi: "Uốn — Perm",
    titleEn: "PERMS",
    summary:
      "Sóng lạnh nhẹ nhàng, sóng sóc Hàn, texture chồm hay perm phồng chân — chọn lõi phù hợp và thuốc theo chỉ số đàn hồi thật của tóc để không bị chai hoặc gãy sóng.",
    detail:
      "Trước khi uốn, tóc được kiểm tra đàn hồi và khô ướt. Sau uốn, chúng tôi dùng bộ dưỡng kết nối nốt kép để tái khóp biểu mô và hướng dẫn bạn không gội quá nóng trong 48h đầu để sóng ôm và bền hơn.",
    highlights: [
      "Định khối lõi và hướng sóng đúng chiều tóc té",
      "Perm kết hợp cắt để không bị sóng chồng mất form",
      "Check-in chỉnh form sau wash vài tuần (theo salon)",
    ],
    thumbnails: [
      img("tran-perm-a", "Texture wave nhẹ"),
      img("tran-perm-b", "Sóng lạnh lớn"),
      img("tran-perm-c", "Perm phần đuôi"),
      img("tran-perm-d", "Root volume curl"),
    ],
  },
  {
    n: "4",
    titleVi: "Duỗi",
    titleEn: "STRAIGHTENING",
    summary:
      "Duỗi nano, cysteine hay keratin chỉ được đề xuất sau khi hiểu mức hư hàng gối và mong muốn độ phẳng (thẳng sương / thẳng tự nhiên còn body).",
    detail:
      "Chúng tôi tránh ép nhiều khối cùng lúc và luôn bảo vệ da đầu. Sau dịch vụ có lộ trình dưỡng protein — keratin tái tại nhà và hẹn chỉnh bóng trong tháng đầu nếu tóc cần chỉnh nhiệt thêm một lớp sealing.",
    highlights: [
      "Test chịu kéo trước khi vào máy",
      "Tách tép mỏng để không lộ chỗ gẫy / chỗ không ăn thuốc",
      "Bộ dưỡng lock ẩm và chống bốc hơi nhiệt cho vài wash đầu",
    ],
    thumbnails: [
      img("tran-straight-a", "Duỗi tự nhiên"),
      img("tran-straight-b", "Phủ nano bóng"),
      img("tran-straight-c", "Chỉnh phần đuôi"),
      img("tran-straight-d", "Kết quả sau finish"),
    ],
  },
];
