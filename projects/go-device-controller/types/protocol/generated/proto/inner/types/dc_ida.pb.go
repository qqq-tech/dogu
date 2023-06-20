// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.7
// source: inner/types/dc_ida.proto

package types

import (
	outer "go-device-controller/types/protocol/generated/proto/outer"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type DcIdaRunAppParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AppPath           string   `protobuf:"bytes,1,opt,name=app_path,json=appPath,proto3" json:"app_path,omitempty"`
	InstalledAppNames []string `protobuf:"bytes,2,rep,name=installed_app_names,json=installedAppNames,proto3" json:"installed_app_names,omitempty"`
	BundleId          string   `protobuf:"bytes,3,opt,name=bundle_id,json=bundleId,proto3" json:"bundle_id,omitempty"`
}

func (x *DcIdaRunAppParam) Reset() {
	*x = DcIdaRunAppParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_ida_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcIdaRunAppParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcIdaRunAppParam) ProtoMessage() {}

func (x *DcIdaRunAppParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_ida_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcIdaRunAppParam.ProtoReflect.Descriptor instead.
func (*DcIdaRunAppParam) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_ida_proto_rawDescGZIP(), []int{0}
}

func (x *DcIdaRunAppParam) GetAppPath() string {
	if x != nil {
		return x.AppPath
	}
	return ""
}

func (x *DcIdaRunAppParam) GetInstalledAppNames() []string {
	if x != nil {
		return x.InstalledAppNames
	}
	return nil
}

func (x *DcIdaRunAppParam) GetBundleId() string {
	if x != nil {
		return x.BundleId
	}
	return ""
}

type DcIdaRunAppResult struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Error *outer.ErrorResult `protobuf:"bytes,1,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *DcIdaRunAppResult) Reset() {
	*x = DcIdaRunAppResult{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_ida_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcIdaRunAppResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcIdaRunAppResult) ProtoMessage() {}

func (x *DcIdaRunAppResult) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_ida_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcIdaRunAppResult.ProtoReflect.Descriptor instead.
func (*DcIdaRunAppResult) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_ida_proto_rawDescGZIP(), []int{1}
}

func (x *DcIdaRunAppResult) GetError() *outer.ErrorResult {
	if x != nil {
		return x.Error
	}
	return nil
}

type DcIdaGetSystemInfoParam struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DcIdaGetSystemInfoParam) Reset() {
	*x = DcIdaGetSystemInfoParam{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_ida_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcIdaGetSystemInfoParam) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcIdaGetSystemInfoParam) ProtoMessage() {}

func (x *DcIdaGetSystemInfoParam) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_ida_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcIdaGetSystemInfoParam.ProtoReflect.Descriptor instead.
func (*DcIdaGetSystemInfoParam) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_ida_proto_rawDescGZIP(), []int{2}
}

type DcIdaGetSystemInfoResult struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ScreenWidth  uint32 `protobuf:"varint,1,opt,name=screen_width,json=screenWidth,proto3" json:"screen_width,omitempty"`
	ScreenHeight uint32 `protobuf:"varint,2,opt,name=screen_height,json=screenHeight,proto3" json:"screen_height,omitempty"`
}

func (x *DcIdaGetSystemInfoResult) Reset() {
	*x = DcIdaGetSystemInfoResult{}
	if protoimpl.UnsafeEnabled {
		mi := &file_inner_types_dc_ida_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DcIdaGetSystemInfoResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DcIdaGetSystemInfoResult) ProtoMessage() {}

func (x *DcIdaGetSystemInfoResult) ProtoReflect() protoreflect.Message {
	mi := &file_inner_types_dc_ida_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DcIdaGetSystemInfoResult.ProtoReflect.Descriptor instead.
func (*DcIdaGetSystemInfoResult) Descriptor() ([]byte, []int) {
	return file_inner_types_dc_ida_proto_rawDescGZIP(), []int{3}
}

func (x *DcIdaGetSystemInfoResult) GetScreenWidth() uint32 {
	if x != nil {
		return x.ScreenWidth
	}
	return 0
}

func (x *DcIdaGetSystemInfoResult) GetScreenHeight() uint32 {
	if x != nil {
		return x.ScreenHeight
	}
	return 0
}

var File_inner_types_dc_ida_proto protoreflect.FileDescriptor

var file_inner_types_dc_ida_proto_rawDesc = []byte{
	0x0a, 0x18, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x64, 0x63,
	0x5f, 0x69, 0x64, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x69, 0x6e, 0x6e, 0x65,
	0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x1a, 0x12, 0x6f, 0x75, 0x74, 0x65, 0x72, 0x2f, 0x65,
	0x72, 0x72, 0x6f, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x7a, 0x0a, 0x10, 0x44,
	0x63, 0x49, 0x64, 0x61, 0x52, 0x75, 0x6e, 0x41, 0x70, 0x70, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x12,
	0x19, 0x0a, 0x08, 0x61, 0x70, 0x70, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x61, 0x70, 0x70, 0x50, 0x61, 0x74, 0x68, 0x12, 0x2e, 0x0a, 0x13, 0x69, 0x6e,
	0x73, 0x74, 0x61, 0x6c, 0x6c, 0x65, 0x64, 0x5f, 0x61, 0x70, 0x70, 0x5f, 0x6e, 0x61, 0x6d, 0x65,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x11, 0x69, 0x6e, 0x73, 0x74, 0x61, 0x6c, 0x6c,
	0x65, 0x64, 0x41, 0x70, 0x70, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x62, 0x75,
	0x6e, 0x64, 0x6c, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x62,
	0x75, 0x6e, 0x64, 0x6c, 0x65, 0x49, 0x64, 0x22, 0x3d, 0x0a, 0x11, 0x44, 0x63, 0x49, 0x64, 0x61,
	0x52, 0x75, 0x6e, 0x41, 0x70, 0x70, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x28, 0x0a, 0x05,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x6f, 0x75,
	0x74, 0x65, 0x72, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52,
	0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x22, 0x19, 0x0a, 0x17, 0x44, 0x63, 0x49, 0x64, 0x61, 0x47,
	0x65, 0x74, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x49, 0x6e, 0x66, 0x6f, 0x50, 0x61, 0x72, 0x61,
	0x6d, 0x22, 0x62, 0x0a, 0x18, 0x44, 0x63, 0x49, 0x64, 0x61, 0x47, 0x65, 0x74, 0x53, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x21, 0x0a,
	0x0c, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x5f, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x0b, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x57, 0x69, 0x64, 0x74, 0x68,
	0x12, 0x23, 0x0a, 0x0d, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x5f, 0x68, 0x65, 0x69, 0x67, 0x68,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0c, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x48,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x42, 0x6a, 0x0a, 0x27, 0x63, 0x6f, 0x6d, 0x2e, 0x64, 0x6f, 0x67,
	0x75, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e, 0x67, 0x65, 0x6e, 0x65, 0x72,
	0x61, 0x74, 0x65, 0x64, 0x2e, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x5a, 0x3f, 0x67, 0x6f, 0x2d, 0x64, 0x65, 0x76, 0x69, 0x63, 0x65, 0x2d, 0x63, 0x6f, 0x6e, 0x74,
	0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x2f, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_inner_types_dc_ida_proto_rawDescOnce sync.Once
	file_inner_types_dc_ida_proto_rawDescData = file_inner_types_dc_ida_proto_rawDesc
)

func file_inner_types_dc_ida_proto_rawDescGZIP() []byte {
	file_inner_types_dc_ida_proto_rawDescOnce.Do(func() {
		file_inner_types_dc_ida_proto_rawDescData = protoimpl.X.CompressGZIP(file_inner_types_dc_ida_proto_rawDescData)
	})
	return file_inner_types_dc_ida_proto_rawDescData
}

var file_inner_types_dc_ida_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_inner_types_dc_ida_proto_goTypes = []interface{}{
	(*DcIdaRunAppParam)(nil),         // 0: inner.types.DcIdaRunAppParam
	(*DcIdaRunAppResult)(nil),        // 1: inner.types.DcIdaRunAppResult
	(*DcIdaGetSystemInfoParam)(nil),  // 2: inner.types.DcIdaGetSystemInfoParam
	(*DcIdaGetSystemInfoResult)(nil), // 3: inner.types.DcIdaGetSystemInfoResult
	(*outer.ErrorResult)(nil),        // 4: outer.ErrorResult
}
var file_inner_types_dc_ida_proto_depIdxs = []int32{
	4, // 0: inner.types.DcIdaRunAppResult.error:type_name -> outer.ErrorResult
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_inner_types_dc_ida_proto_init() }
func file_inner_types_dc_ida_proto_init() {
	if File_inner_types_dc_ida_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_inner_types_dc_ida_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcIdaRunAppParam); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_dc_ida_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcIdaRunAppResult); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_dc_ida_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcIdaGetSystemInfoParam); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_inner_types_dc_ida_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DcIdaGetSystemInfoResult); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_inner_types_dc_ida_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_inner_types_dc_ida_proto_goTypes,
		DependencyIndexes: file_inner_types_dc_ida_proto_depIdxs,
		MessageInfos:      file_inner_types_dc_ida_proto_msgTypes,
	}.Build()
	File_inner_types_dc_ida_proto = out.File
	file_inner_types_dc_ida_proto_rawDesc = nil
	file_inner_types_dc_ida_proto_goTypes = nil
	file_inner_types_dc_ida_proto_depIdxs = nil
}